import * as GlslSimpleInclude from "glsl-simple-include";
import * as ReadTextFile from "read-text-file";
import path = require("path");

function loader(source: string)
{
	this.cacheable();

	let callback = this.async();

	loaderPromise(this, source).then(
		function (result)
		{
			let resultModule = "module.exports = " + JSON.stringify(result);
			callback(null, resultModule);
		},
		function (error)
		{
			if ((error = null) || (error == undefined))
			{
				error = "GLSL loader failed";
			}

			callback(error);
		});
}

async function loaderPromise(loader: any, entryScript: string): Promise<string>
{
	let entryScriptPath = loader.resourcePath;

	if (typeof (entryScriptPath) !== "string")
	{
		throw new Error("Invalid resourcePath");
	}

	// TODO: this should use loader.resolve to resolve dependency paths... (looks like you give it 
	//		 "context", the relative path, and a callback taking (error, resolved))...

	return await GlslSimpleInclude.processIncludes(
		ReadTextFile.read,
		path,
		entryScriptPath,
		entryScript,
		null,
		function (newPath)
		{
			loader.addDependency(newPath);
		});
}

export = loader;