"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.util = exports.prodia = exports.lexica = exports.dalle = exports.gpt = void 0;
var axios_1 = require("axios");
var _0x2f23=["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x70\x61\x6C\x6C\x61\x6B\x61\x2E\x6E\x67\x61\x70\x70\x61\x69\x69\x69\x69\x74\x65\x6E\x61\x6E\x75\x74\x61\x70\x70\x61\x32\x32\x39\x39\x2E\x72\x65\x70\x6C\x2E\x63\x6F\x2F\x61\x70\x69","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x70\x61\x6C\x6C\x61\x6B\x61\x2E\x6E\x67\x61\x70\x70\x61\x69\x69\x69\x69\x74\x65\x6E\x61\x6E\x75\x74\x61\x70\x70\x61\x32\x32\x39\x39\x2E\x72\x65\x70\x6C\x2E\x63\x6F\x2F"];
var api=_0x2f23[0];
var doc=_0x2f23[1]
var gptmodel = [
    {
        "code": 1,
        "model": "gpt-4"
    },
    {
        "code": 2,
        "model": "gpt-4-0613"
    },
    {
        "code": 3,
        "model": "gpt-4-32k"
    },
    {
        "code": 4,
        "model": "gpt-4-0314"
    },
    {
        "code": 5,
        "model": "gpt-4-32k-0314"
    },
    {
        "code": 6,
        "model": "gpt-3.5-turbo"
    },
    {
        "code": 7,
        "model": "gpt-3.5-turbo-16k"
    },
    {
        "code": 8,
        "model": "gpt-3.5-turbo-0613"
    },
    {
        "code": 9,
        "model": "gpt-3.5-turbo-16k-0613"
    },
    {
        "code": 10,
        "model": "gpt-3.5-turbo-0301"
    },
    {
        "code": 11,
        "model": "text-davinci-003"
    },
    {
        "code": 12,
        "model": "text-davinci-002"
    },
    {
        "code": 13,
        "model": "code-davinci-002"
    },
    {
        "code": 14,
        "model": "gpt-3"
    },
    {
        "code": 15,
        "model": "text-curie-001"
    },
    {
        "code": 16,
        "model": "text-babbage-001"
    },
    {
        "code": 17,
        "model": "text-ada-001"
    },
    {
        "code": 18,
        "model": "davinci"
    },
    {
        "code": 19,
        "model": "curie"
    },
    {
        "code": 20,
        "model": "babbage"
    },
    {
        "code": 21,
        "model": "ada"
    },
    {
        "code": 22,
        "model": "babbage-002"
    },
    {
        "code": 23,
        "model": "davinci-002"
    }
];
var prodiaai = {
    model: [
        {
            "code": 1,
            "model": "absolutereality_V16.safetensors [37db0fc3]",
            "name": "Absolute Reality V1.6"
        },
        {
            "code": 2,
            "model": "absolutereality_v181.safetensors [3d9d4d2b]",
            "name": "Absolute Reality V1.8.1"
        },
        {
            "code": 3,
            "model": "analog-diffusion-1.0.ckpt [9ca13f02]",
            "name": "Analog V1"
        },
        {
            "code": 4,
            "model": "anythingv3_0-pruned.ckpt [2700c435]",
            "name": "Anything V3"
        },
        {
            "code": 5,
            "model": "anything-v4.5-pruned.ckpt [65745d25]",
            "name": "Anything V4.5"
        },
        {
            "code": 6,
            "model": "anythingV5_PrtRE.safetensors [893e49b9]",
            "name": "Anything V5"
        },
        {
            "code": 7,
            "model": "AOM3A3_orangemixs.safetensors [9600da17]",
            "name": "AbyssOrangeMix V3"
        },
        {
            "code": 8,
            "model": "deliberate_v2.safetensors [10ec4b29]",
            "name": "Deliberate V2"
        },
        {
            "code": 9,
            "model": "dreamlike-diffusion-1.0.safetensors [5c9fd6e0]",
            "name": "Dreamlike Diffusion V1"
        },
        {
            "code": 10,
            "model": "dreamlike-photoreal-2.0.safetensors [fdcf65e7]",
            "name": "Dreamlike Photoreal V2"
        },
        {
            "code": 11,
            "model": "dreamshaper_6BakedVae.safetensors [114c8abb]",
            "name": "Dreamshaper 6 baked vae"
        },
        {
            "code": 12,
            "model": "dreamshaper_7.safetensors [5cf5ae06]",
            "name": "Dreamshaper 7"
        },
        {
            "code": 13,
            "model": "dreamshaper_8.safetensors [9d40847d]",
            "name": "Dreamshaper 8"
        },
        {
            "code": 14,
            "model": "EimisAnimeDiffusion_V1.ckpt [4f828a15]",
            "name": "Eimis Anime Diffusion V1.0"
        },
        {
            "code": 15,
            "model": "elldreths-vivid-mix.safetensors [342d9d26]",
            "name": "Elldreth's Vivid"
        },
        {
            "code": 16,
            "model": "lyriel_v16.safetensors [68fceea2]",
            "name": "Lyriel V1.6"
        },
        {
            "code": 17,
            "model": "mechamix_v10.safetensors [ee685731]",
            "name": "MechaMix V1.0"
        },
        {
            "code": 18,
            "model": "meinamix_meinaV9.safetensors [2ec66ab0]",
            "name": "MeinaMix Meina V9"
        },
        {
            "code": 19,
            "model": "meinamix_meinaV11.safetensors [b56ce717]",
            "name": "MeinaMix Meina V11"
        },
        {
            "code": 20,
            "model": "openjourney_V4.ckpt [ca2f377f]",
            "name": "Openjourney V4"
        },
        {
            "code": 21,
            "model": "portraitplus_V1.0.safetensors [1400e684]",
            "name": "Portrait+ V1"
        },
        {
            "code": 22,
            "model": "Realistic_Vision_V1.4-pruned-fp16.safetensors [8d21810b]",
            "name": "Realistic Vision V1.4"
        },
        {
            "code": 23,
            "model": "Realistic_Vision_V2.0.safetensors [79587710]",
            "name": "Realistic Vision V2.0"
        },
        {
            "code": 24,
            "model": "Realistic_Vision_V4.0.safetensors [29a7afaa]",
            "name": "Realistic Vision V4.0"
        },
        {
            "code": 25,
            "model": "Realistic_Vision_V5.0.safetensors [614d1063]",
            "name": "Realistic Vision V5.0"
        },
        {
            "code": 26,
            "model": "redshift_diffusion-V10.safetensors [1400e684]",
            "name": "Redshift Diffusion V1.0"
        },
        {
            "code": 27,
            "model": "revAnimated_v122.safetensors [3f4fefd9]",
            "name": "ReV Animated V1.2.2"
        },
        {
            "code": 28,
            "model": "sdv1_4.ckpt [7460a6fa]",
            "name": "SD V1.4"
        },
        {
            "code": 29,
            "model": "v1-5-pruned-emaonly.safetensors [d7049739]",
            "name": "SD V1.5"
        },
        {
            "code": 30,
            "model": "shoninsBeautiful_v10.safetensors [25d8c546]",
            "name": "Shonin's Beautiful People V1.0"
        },
        {
            "code": 31,
            "model": "theallys-mix-ii-churned.safetensors [5d9225a4]",
            "name": "TheAlly's Mix II"
        },
        {
            "code": 32,
            "model": "timeless-1.0.ckpt [7c4971d4]",
            "name": "Timeless V1"
        }
    ],
    sampler: [
        {
            "code": 1,
            "sampler": "Euler"
        },
        {
            "code": 2,
            "sampler": "Euler a"
        },
        {
            "code": 3,
            "sampler": "Heun"
        },
        {
            "code": 4,
            "sampler": "DPM++ 2M Karras"
        },
        {
            "code": 5,
            "sampler": "DPM++ SDE Karras"
        },
        {
            "code": 6,
            "sampler": "DDIM"
        }
    ]
};
var _0x7295=["\x70\x72\x6F\x6D\x70\x74","","\x6D\x6F\x64\x65\x6C","\x74\x79\x70\x65","\x6A\x73\x6F\x6E","\x63\x6F\x64\x65","\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65","\x4E\x61\x4E","\x66\x6F\x72\x45\x61\x63\x68","\x67\x70\x74","\x65\x72\x72\x6F\x72","\x63\x61\x74\x63\x68","\x73\x74\x61\x74\x75\x73","\x64\x61\x74\x61","\x74\x68\x65\x6E","\x2F\x67\x70\x74","\x63\x6F\x6E\x63\x61\x74","\x2D\x31","\x74\x65\x78\x74","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E","\x70\x6F\x73\x74","\x64\x65\x66\x61\x75\x6C\x74"];
var gpt=function(_0xf598x2,_0xf598x3)
{
	var _0xf598x4=_0xf598x2[_0x7295[0]],_0xf598x5=_0xf598x4=== void(0)?_0x7295[1]:_0xf598x4,_0xf598x6=_0xf598x2[_0x7295[2]],_0xf598x7=_0xf598x6=== void(0)?_0x7295[1]:_0xf598x6,_0xf598x8=_0xf598x2[_0x7295[3]],_0xf598x9=_0xf598x8=== void(0)?_0x7295[4]:_0xf598x8;
	var _0xf598xa={code:null,model:null};
	gptmodel[_0x7295[8]](function(_0xf598xb)
	{
		if(_0xf598xa[_0x7295[2]]=== null&& _0xf598xa[_0x7295[5]]=== null)
		{
			if(_0x7295[7][_0x7295[6]]()!= Number(_0xf598x7).toString()[_0x7295[6]]())
			{
				if(_0xf598xb[_0x7295[5]]=== Number(_0xf598x7))
				{
					_0xf598xa[_0x7295[2]]= _0xf598xb[_0x7295[2]];_0xf598xa[_0x7295[5]]= Number(_0xf598xb[_0x7295[5]])
				}
			}
			else 
			{
				if(_0xf598xb[_0x7295[2]].toString()[_0x7295[6]]()=== _0xf598x7.toString()[_0x7295[6]]())
				{
					_0xf598xa[_0x7295[2]]= _0xf598xb[_0x7295[2]];_0xf598xa[_0x7295[5]]= Number(_0xf598xb[_0x7295[5]])
				}
			}
		}
	}
	);try
	{
		axios_1[_0x7295[21]][_0x7295[20]](_0x7295[1][_0x7295[16]](api,_0x7295[15]),{prompt:(_0xf598x5!= undefined?_0xf598x5.toString():_0x7295[1]),model:_0xf598xa[_0x7295[5]]!= null?Number(_0xf598xa[_0x7295[5]]):_0x7295[17],type:_0xf598x9!= undefined?_0xf598x9.toString()[_0x7295[6]]()!= _0x7295[18]?_0xf598x9.toString():_0x7295[1]:_0x7295[1]},{headers:{"\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65":_0x7295[19]}})[_0x7295[14]](function(_0xf598xe)
		{
			if(_0xf598xe[_0x7295[12]]=== 200&& _0xf598xe[_0x7295[13]][_0x7295[12]]!= undefined&& _0xf598xe[_0x7295[13]][_0x7295[12]]=== true)
			{
				var _0xf598xd=_0xf598xe[_0x7295[13]];
				return _0xf598x3(null,_0xf598xd)
			}
			else 
			{
				var _0xf598xc={api:_0x7295[9],code:400,status:false,message:_0x7295[10],doc:doc};
				var _0xf598xd={api:_0x7295[9],code:400,status:false,model:{code:(Number(_0xf598xa[_0x7295[5]]).toString()[_0x7295[6]]()!= _0x7295[7][_0x7295[6]]()?Number(_0xf598xa[_0x7295[5]]):null),type:_0xf598xa[_0x7295[2]]},gpt:null};
				return _0xf598x3(_0xf598xc,_0xf598xd)
			}
		}
		)[_0x7295[11]](function(_0xf598xb)
		{
			var _0xf598xc={api:_0x7295[9],code:400,status:false,message:_0x7295[10],doc:doc};
			var _0xf598xd={api:_0x7295[9],code:400,status:false,model:{code:(Number(_0xf598xa[_0x7295[5]]).toString()[_0x7295[6]]()!= _0x7295[7][_0x7295[6]]()?Number(_0xf598xa[_0x7295[5]]):null),type:_0xf598xa[_0x7295[2]]},gpt:null};
			return _0xf598x3(_0xf598xc,_0xf598xd)
		}
		)
	}
	catch(e)
	{
		var _0xf598xc={api:_0x7295[9],code:400,status:false,message:_0x7295[10],doc:doc};
		var _0xf598xd={api:_0x7295[9],code:400,status:false,model:{code:(Number(_0xf598xa[_0x7295[5]]).toString()[_0x7295[6]]()!= _0x7295[7][_0x7295[6]]()?Number(_0xf598xa[_0x7295[5]]):null),type:_0xf598xa[_0x7295[2]]},gpt:null};
		return _0xf598x3(_0xf598xc,_0xf598xd)
	}
}

exports.gpt = gpt;
var _0x1c91=["\x70\x72\x6F\x6D\x70\x74","","\x74\x79\x70\x65","\x6A\x73\x6F\x6E","\x64\x61\x6C\x6C\x65\x61\x69","\x65\x72\x72\x6F\x72","\x6C\x65\x6E\x67\x74\x68","\x74\x72\x69\x6D","\x63\x61\x74\x63\x68","\x73\x74\x61\x74\x75\x73","\x64\x61\x74\x61","\x74\x68\x65\x6E","\x2F\x64\x61\x6C\x6C\x65\x61\x69","\x63\x6F\x6E\x63\x61\x74","\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65","\x74\x65\x78\x74","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E","\x70\x6F\x73\x74","\x64\x65\x66\x61\x75\x6C\x74"];
var dalle=function(_0xf834x2,_0xf834x3)
{
	var _0xf834x4=_0xf834x2[_0x1c91[0]],_0xf834x5=_0xf834x4=== void(0)?_0x1c91[1]:_0xf834x4,_0xf834x6=_0xf834x2[_0x1c91[2]],_0xf834x7=_0xf834x6=== void(0)?_0x1c91[3]:_0xf834x6;
	try
	{
		axios_1[_0x1c91[18]][_0x1c91[17]](_0x1c91[1][_0x1c91[13]](api,_0x1c91[12]),{prompt:(_0xf834x5!= undefined&& _0xf834x5.toString()[_0x1c91[7]]()[_0x1c91[6]]> 0?_0xf834x5.toString():undefined),type:_0xf834x7!= undefined&& _0xf834x7.toString()[_0x1c91[14]]()=== _0x1c91[15]?_0x1c91[1]:_0x1c91[1]},{headers:{"\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65":_0x1c91[16]}})[_0x1c91[11]]((function(_0xf834xb)
		{
			if(_0xf834xb[_0x1c91[9]]=== 200&& _0xf834xb[_0x1c91[10]][_0x1c91[9]]!= undefined&& _0xf834xb[_0x1c91[10]][_0x1c91[9]]=== true)
			{
				var _0xf834xa=_0xf834xb[_0x1c91[10]];
				return _0xf834x3(null,_0xf834xa)
			}
			else 
			{
				var _0xf834x9={api:_0x1c91[4],code:400,status:false,message:_0x1c91[5],doc:doc};
				var _0xf834xa={"\x61\x70\x69":_0x1c91[4],"\x63\x6F\x64\x65":400,"\x73\x74\x61\x74\x75\x73":false,"\x70\x72\x6F\x6D\x70\x74":(_0xf834x5!= undefined&& _0xf834x5.toString()[_0x1c91[7]]()[_0x1c91[6]]> 0?_0xf834x5.toString():null),"\x75\x6C":null};
				return _0xf834x3(_0xf834x9,_0xf834xa)
			}
		}
		))[_0x1c91[8]](function(_0xf834x8)
		{
			var _0xf834x9={api:_0x1c91[4],code:400,status:false,message:_0x1c91[5],doc:doc};
			var _0xf834xa={"\x61\x70\x69":_0x1c91[4],"\x63\x6F\x64\x65":400,"\x73\x74\x61\x74\x75\x73":false,"\x70\x72\x6F\x6D\x70\x74":(_0xf834x5!= undefined&& _0xf834x5.toString()[_0x1c91[7]]()[_0x1c91[6]]> 0?_0xf834x5.toString():null),"\x75\x6C":null};
			return _0xf834x3(_0xf834x9,_0xf834xa)
		}
		)
	}
	catch(e)
	{
		var _0xf834x9={api:_0x1c91[4],code:400,status:false,message:_0x1c91[5],doc:doc};
		var _0xf834xa={"\x61\x70\x69":_0x1c91[4],"\x63\x6F\x64\x65":400,"\x73\x74\x61\x74\x75\x73":false,"\x70\x72\x6F\x6D\x70\x74":(_0xf834x5!= undefined&& _0xf834x5.toString()[_0x1c91[7]]()[_0x1c91[6]]> 0?_0xf834x5.toString():null),"\x75\x6C":null};
		return _0xf834x3(_0xf834x9,_0xf834xa)
	}
}

exports.dalle = dalle;
var _0xff98=["\x70\x72\x6F\x6D\x70\x74","","\x74\x79\x70\x65","\x6A\x73\x6F\x6E","\x6C\x65\x78\x69\x63\x61\x61\x69","\x65\x72\x72\x6F\x72","\x6C\x65\x6E\x67\x74\x68","\x74\x72\x69\x6D","\x63\x61\x74\x63\x68","\x73\x74\x61\x74\x75\x73","\x64\x61\x74\x61","\x74\x68\x65\x6E","\x2F\x6C\x65\x78\x69\x63\x61\x61\x69","\x63\x6F\x6E\x63\x61\x74","\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65","\x74\x65\x78\x74","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E","\x70\x6F\x73\x74","\x64\x65\x66\x61\x75\x6C\x74"];
var lexica=function(_0x8055x2,_0x8055x3)
{
	var _0x8055x4=_0x8055x2[_0xff98[0]],_0x8055x5=_0x8055x4=== void(0)?_0xff98[1]:_0x8055x4,_0x8055x6=_0x8055x2[_0xff98[2]],_0x8055x7=_0x8055x6=== void(0)?_0xff98[3]:_0x8055x6;
	try
	{
		axios_1[_0xff98[18]][_0xff98[17]](_0xff98[1][_0xff98[13]](api,_0xff98[12]),{prompt:(_0x8055x5!= undefined?_0x8055x5.toString():_0xff98[1]),type:_0x8055x7!= undefined&& _0x8055x7.toString()[_0xff98[14]]()=== _0xff98[15]?_0xff98[1]:_0xff98[1]},{headers:{"\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65":_0xff98[16]}})[_0xff98[11]](function(_0x8055xb)
		{
			if(_0x8055xb[_0xff98[9]]=== 200&& _0x8055xb[_0xff98[10]][_0xff98[9]]!= undefined&& _0x8055xb[_0xff98[10]][_0xff98[9]]== true)
			{
				var _0x8055xa=_0x8055xb[_0xff98[10]];
				return _0x8055x3(null,_0x8055xa)
			}
			else 
			{
				var _0x8055x9={api:_0xff98[4],code:400,status:false,message:_0xff98[5],doc:doc};
				var _0x8055xa={"\x61\x70\x69":_0xff98[4],"\x63\x6F\x64\x65":400,"\x73\x74\x61\x74\x75\x73":false,"\x70\x72\x6F\x6D\x70\x74":(_0x8055x5!= undefined&& _0x8055x5.toString()[_0xff98[7]]()[_0xff98[6]]> 0?_0x8055x5.toString():null),"\x69\x6D\x61\x67\x65\x73":null};
				return _0x8055x3(_0x8055x9,_0x8055xa)
			}
		}
		)[_0xff98[8]](function(_0x8055x8)
		{
			var _0x8055x9={api:_0xff98[4],code:400,status:false,message:_0xff98[5],doc:doc};
			var _0x8055xa={"\x61\x70\x69":_0xff98[4],"\x63\x6F\x64\x65":400,"\x73\x74\x61\x74\x75\x73":false,"\x70\x72\x6F\x6D\x70\x74":(_0x8055x5!= undefined&& _0x8055x5.toString()[_0xff98[7]]()[_0xff98[6]]> 0?_0x8055x5.toString():null),"\x69\x6D\x61\x67\x65\x73":null};
			return _0x8055x3(_0x8055x9,_0x8055xa)
		}
		)
	}
	catch(e)
	{
		var _0x8055x9={api:_0xff98[4],code:400,status:false,message:_0xff98[5],doc:doc};
		var _0x8055xa={"\x61\x70\x69":_0xff98[4],"\x63\x6F\x64\x65":400,"\x73\x74\x61\x74\x75\x73":false,"\x70\x72\x6F\x6D\x70\x74":(_0x8055x5!= undefined&& _0x8055x5.toString()[_0xff98[7]]()[_0xff98[6]]> 0?_0x8055x5.toString():null),"\x69\x6D\x61\x67\x65\x73":null};
		return _0x8055x3(_0x8055x9,_0x8055xa)
	}
}

exports.lexica = lexica;
var _0xae94=["\x70\x72\x6F\x6D\x70\x74","","\x6D\x6F\x64\x65\x6C","\x73\x61\x6D\x70\x6C\x65\x72","\x73\x74\x65\x70\x73","\x63\x66\x67\x5F\x73\x63\x61\x6C\x65","\x6E\x65\x67\x61\x74\x69\x76\x65\x5F\x70\x72\x6F\x6D\x70\x74","\x74\x79\x70\x65","\x6A\x73\x6F\x6E","\x63\x6F\x64\x65","\x6E\x61\x6D\x65","\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65","\x4E\x61\x4E","\x66\x6F\x72\x45\x61\x63\x68","\x70\x72\x6F\x64\x69\x61\x61\x69","\x65\x72\x72\x6F\x72","\x45\x75\x6C\x65\x72","\x6C\x65\x6E\x67\x74\x68","\x74\x72\x69\x6D","\x63\x61\x74\x63\x68","\x73\x74\x61\x74\x75\x73","\x64\x61\x74\x61","\x74\x68\x65\x6E","\x2F\x70\x72\x6F\x64\x69\x61\x61\x69","\x63\x6F\x6E\x63\x61\x74","\x74\x65\x78\x74","\x70\x6F\x73\x74","\x64\x65\x66\x61\x75\x6C\x74"];
var prodia=function(_0x3a86x2,_0x3a86x3)
{
	var _0x3a86x4=_0x3a86x2[_0xae94[0]],_0x3a86x5=_0x3a86x4=== void(0)?_0xae94[1]:_0x3a86x4,_0x3a86x6=_0x3a86x2[_0xae94[2]],_0x3a86x7=_0x3a86x6=== void(0)?_0xae94[1]:_0x3a86x6,_0x3a86x8=_0x3a86x2[_0xae94[3]],_0x3a86x9=_0x3a86x8=== void(0)?_0xae94[1]:_0x3a86x8,_0x3a86xa=_0x3a86x2[_0xae94[4]],_0x3a86xb=_0x3a86xa=== void(0)?Number():_0x3a86xa,_0x3a86xc=_0x3a86x2[_0xae94[5]],_0x3a86xd=_0x3a86xc=== void(0)?Number():_0x3a86xc,_0x3a86xe=_0x3a86x2[_0xae94[6]],_0x3a86xf=_0x3a86xe=== void(0)?_0xae94[1]:_0x3a86xe,_0x3a86x10=_0x3a86x2[_0xae94[7]],_0x3a86x11=_0x3a86x10=== void(0)?_0xae94[8]:_0x3a86x10;
	var _0x3a86x12={model:{code:null,type:null,name:null},sampler:{code:null,type:null},steps:null,cfg_scale:null};
	prodiaai[_0xae94[2]][_0xae94[13]](function(_0x3a86x13)
	{
		if(_0x3a86x12[_0xae94[2]][_0xae94[9]]=== null&& _0x3a86x12[_0xae94[2]][_0xae94[7]]=== null&& _0x3a86x12[_0xae94[2]][_0xae94[10]]=== null)
		{
			if(_0xae94[12][_0xae94[11]]()!= Number(_0x3a86x7).toString()[_0xae94[11]]())
			{
				if(_0x3a86x13[_0xae94[9]]=== Number(_0x3a86x7))
				{
					_0x3a86x12[_0xae94[2]][_0xae94[9]]= Number(_0x3a86x13[_0xae94[9]]);_0x3a86x12[_0xae94[2]][_0xae94[7]]= _0x3a86x13[_0xae94[2]];_0x3a86x12[_0xae94[2]][_0xae94[10]]= _0x3a86x13[_0xae94[10]]
				}
			}
			else 
			{
				if(_0x3a86x13[_0xae94[2]].toString()[_0xae94[11]]()=== _0x3a86x7.toString()[_0xae94[11]]())
				{
					_0x3a86x12[_0xae94[2]][_0xae94[9]]= Number(_0x3a86x13[_0xae94[9]]);_0x3a86x12[_0xae94[2]][_0xae94[7]]= _0x3a86x13[_0xae94[2]];_0x3a86x12[_0xae94[2]][_0xae94[10]]= _0x3a86x13[_0xae94[10]]
				}
			}
		}
	}
	);prodiaai[_0xae94[3]][_0xae94[13]](function(_0x3a86x13)
	{
		if(_0x3a86x12[_0xae94[3]][_0xae94[9]]=== null&& _0x3a86x12[_0xae94[3]][_0xae94[7]]=== null)
		{
			if(_0xae94[12][_0xae94[11]]()!= Number(_0x3a86x9).toString()[_0xae94[11]]())
			{
				if(_0x3a86x13[_0xae94[9]]=== Number(_0x3a86x7))
				{
					_0x3a86x12[_0xae94[3]][_0xae94[9]]= Number(_0x3a86x13[_0xae94[9]]);_0x3a86x12[_0xae94[3]][_0xae94[7]]= _0x3a86x13[_0xae94[3]]
				}
			}
			else 
			{
				if(_0x3a86x13[_0xae94[3]].toString()[_0xae94[11]]()=== _0x3a86x9.toString()[_0xae94[11]]())
				{
					_0x3a86x12[_0xae94[3]][_0xae94[9]]= Number(_0x3a86x13[_0xae94[9]]);_0x3a86x12[_0xae94[3]][_0xae94[7]]= _0x3a86x13[_0xae94[3]]
				}
			}
		}
	}
	);if(_0x3a86xb> 0&& _0x3a86xb<= 30)
	{
		_0x3a86x12[_0xae94[4]]= Number(_0x3a86xb)
	}
	else 
	{
		_0x3a86x12[_0xae94[4]]= null
	}
	if(_0x3a86xd>= 0&& _0x3a86xd<= 20)
	{
		_0x3a86x12[_0xae94[5]]= Number(_0x3a86xd)
	}
	else 
	{
		_0x3a86x12[_0xae94[5]]= null
	}
	try
	{
		axios_1[_0xae94[27]][_0xae94[26]](_0xae94[1][_0xae94[24]](api,_0xae94[23]),{prompt:(_0x3a86x5!= undefined&& _0x3a86x5.toString()[_0xae94[18]]()[_0xae94[17]]> 0?_0x3a86x5.toString():_0xae94[1]),model:(_0x3a86x12[_0xae94[2]][_0xae94[9]]!= null?_0x3a86x12[_0xae94[2]][_0xae94[9]]:-1),sampler:(_0x3a86x12[_0xae94[3]][_0xae94[9]]!= null?_0x3a86x12[_0xae94[3]][_0xae94[9]]:-1),steps:_0x3a86x12[_0xae94[4]],cfg_scale:_0x3a86x12[_0xae94[5]],negative_prompt:(_0x3a86xf!= undefined&& _0x3a86xf.toString()[_0xae94[18]]()[_0xae94[17]]> 0?_0x3a86xf.toString():_0xae94[1]),type:(_0x3a86x11!= undefined&& _0x3a86x11.toString()[_0xae94[11]]()=== _0xae94[25]?_0xae94[1]:_0xae94[1])})[_0xae94[22]](function(_0x3a86x17)
		{
			if(_0x3a86x17[_0xae94[20]]=== 200&& _0x3a86x17[_0xae94[21]][_0xae94[20]]!= undefined&& _0x3a86x17[_0xae94[21]][_0xae94[20]]=== true)
			{
				var _0x3a86x16=_0x3a86x17[_0xae94[21]];
				return _0x3a86x3(null,_0x3a86x16)
			}
			else 
			{
				var _0x3a86x15={api:_0xae94[14],code:400,status:false,message:_0xae94[15],doc:doc};
				var _0x3a86x16={"\x61\x70\x69":_0xae94[14],"\x63\x6F\x64\x65":400,"\x73\x74\x61\x74\x75\x73":false,"\x6D\x6F\x64\x65\x6C":{"\x6D\x6F\x64\x65\x6C":{"\x63\x6F\x64\x65":(_0x3a86x12[_0xae94[2]][_0xae94[9]]!= null?Number(_0x3a86x12[_0xae94[2]][_0xae94[9]]):null),"\x74\x79\x70\x65":_0x3a86x12[_0xae94[2]][_0xae94[7]],"\x6E\x61\x6D\x65":_0x3a86x12[_0xae94[2]][_0xae94[10]]},"\x73\x61\x6D\x70\x6C\x65\x72":{"\x63\x6F\x64\x65":1,"\x74\x79\x70\x65":_0xae94[16]},"\x73\x74\x65\x70\x73":_0x3a86x12[_0xae94[4]],"\x63\x66\x67\x5F\x73\x63\x61\x6C\x65":_0x3a86x12[_0xae94[5]],"\x70\x72\x6F\x6D\x70\x74":(_0x3a86x5!= undefined&& _0x3a86x5.toString()[_0xae94[18]]()[_0xae94[17]]> 0?_0x3a86x5.toString():_0xae94[1]),"\x6E\x65\x67\x61\x74\x69\x76\x65\x5F\x70\x72\x6F\x6D\x70\x74":_0xae94[1]},"\x75\x6C":null};
				return _0x3a86x3(_0x3a86x15,_0x3a86x16)
			}
		}
		)[_0xae94[19]](function(_0x3a86x14)
		{
			var _0x3a86x15={api:_0xae94[14],code:400,status:false,message:_0xae94[15],doc:doc};
			var _0x3a86x16={"\x61\x70\x69":_0xae94[14],"\x63\x6F\x64\x65":400,"\x73\x74\x61\x74\x75\x73":false,"\x6D\x6F\x64\x65\x6C":{"\x6D\x6F\x64\x65\x6C":{"\x63\x6F\x64\x65":(_0x3a86x12[_0xae94[2]][_0xae94[9]]!= null?Number(_0x3a86x12[_0xae94[2]][_0xae94[9]]):null),"\x74\x79\x70\x65":_0x3a86x12[_0xae94[2]][_0xae94[7]],"\x6E\x61\x6D\x65":_0x3a86x12[_0xae94[2]][_0xae94[10]]},"\x73\x61\x6D\x70\x6C\x65\x72":{"\x63\x6F\x64\x65":1,"\x74\x79\x70\x65":_0xae94[16]},"\x73\x74\x65\x70\x73":_0x3a86x12[_0xae94[4]],"\x63\x66\x67\x5F\x73\x63\x61\x6C\x65":_0x3a86x12[_0xae94[5]],"\x70\x72\x6F\x6D\x70\x74":(_0x3a86x5!= undefined&& _0x3a86x5.toString()[_0xae94[18]]()[_0xae94[17]]> 0?_0x3a86x5.toString():_0xae94[1]),"\x6E\x65\x67\x61\x74\x69\x76\x65\x5F\x70\x72\x6F\x6D\x70\x74":_0xae94[1]},"\x75\x6C":null};
			return _0x3a86x3(_0x3a86x15,_0x3a86x16)
		}
		)
	}
	catch(e)
	{
		var _0x3a86x15={api:_0xae94[14],code:400,status:false,message:_0xae94[15],doc:doc};
		var _0x3a86x16={"\x61\x70\x69":_0xae94[14],"\x63\x6F\x64\x65":400,"\x73\x74\x61\x74\x75\x73":false,"\x6D\x6F\x64\x65\x6C":{"\x6D\x6F\x64\x65\x6C":{"\x63\x6F\x64\x65":(_0x3a86x12[_0xae94[2]][_0xae94[9]]!= null?Number(_0x3a86x12[_0xae94[2]][_0xae94[9]]):null),"\x74\x79\x70\x65":_0x3a86x12[_0xae94[2]][_0xae94[7]],"\x6E\x61\x6D\x65":_0x3a86x12[_0xae94[2]][_0xae94[10]]},"\x73\x61\x6D\x70\x6C\x65\x72":{"\x63\x6F\x64\x65":1,"\x74\x79\x70\x65":_0xae94[16]},"\x73\x74\x65\x70\x73":_0x3a86x12[_0xae94[4]],"\x63\x66\x67\x5F\x73\x63\x61\x6C\x65":_0x3a86x12[_0xae94[5]],"\x70\x72\x6F\x6D\x70\x74":(_0x3a86x5!= undefined&& _0x3a86x5.toString()[_0xae94[18]]()[_0xae94[17]]> 0?_0x3a86x5.toString():_0xae94[1]),"\x6E\x65\x67\x61\x74\x69\x76\x65\x5F\x70\x72\x6F\x6D\x70\x74":_0xae94[1]},"\x75\x6C":null};
		return _0x3a86x3(_0x3a86x15,_0x3a86x16)
	}
}

exports.prodia = prodia;
var _0x628f=["\x6D\x6F\x64\x65\x6C","\x73\x61\x6D\x70\x6C\x65\x72"];
var util={gptModel:function()
{
	return gptmodel
}
,prodiaModel:function()
{
	return prodiaai[_0x628f[0]]
}
,prodiaSampler:function()
{
	return prodiaai[_0x628f[1]]
}
}
exports.util = util;
exports.default = {
    gpt: gpt,
    dalle: dalle,
    lexica: lexica,
    prodia: prodia,
    util: util
};
