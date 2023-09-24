const gpti = {
    gpt: ({
       prompt = "",
       model = "",
       type = "json",
    }, proc = (err, data)) => {
        const gptmodel = [
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

        const error = {
            "api": "gpti",
            "code": 400,
            "status": false,
            "message": "error"
        }

        var md = {
            code: null,
            model: null
        }
    
        var _0x9a92=["\x6D\x6F\x64\x65\x6C","\x63\x6F\x64\x65","\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65","\x4E\x61\x4E","\x66\x6F\x72\x45\x61\x63\x68","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x70\x61\x6C\x6C\x61\x6B\x61\x2E\x6E\x67\x61\x70\x70\x61\x69\x69\x69\x69\x74\x65\x6E\x61\x6E\x75\x74\x61\x70\x70\x61\x32\x32\x39\x39\x2E\x72\x65\x70\x6C\x2E\x63\x6F\x2F\x61\x70\x69\x2F\x67\x70\x74","","\x2D\x31","\x74\x65\x78\x74","\x6A\x73\x6F\x6E","\x63\x61\x74\x63\x68","\x73\x74\x61\x74\x75\x73","\x74\x68\x65\x6E","\x50\x4F\x53\x54","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E","\x73\x74\x72\x69\x6E\x67\x69\x66\x79"];gptmodel[_0x9a92[4]]((_0x2298x1)=>{if(md[_0x9a92[0]]=== null&& md[_0x9a92[1]]=== null){if(_0x9a92[3][_0x9a92[2]]()!= Number(model).toString()[_0x9a92[2]]()){if(_0x2298x1[_0x9a92[1]]=== Number(model)){md[_0x9a92[0]]= _0x2298x1[_0x9a92[0]];md[_0x9a92[1]]= Number(_0x2298x1[_0x9a92[1]])}}else {if(_0x2298x1[_0x9a92[0]].toString()[_0x9a92[2]]()=== model.toString()[_0x9a92[2]]()){md[_0x9a92[0]]= _0x2298x1[_0x9a92[0]];md[_0x9a92[1]]= Number(_0x2298x1[_0x9a92[1]])}}}});const url=_0x9a92[5];const js={prompt:(prompt!= undefined?prompt.toString():_0x9a92[6]),model:(md[_0x9a92[1]]!= null?md[_0x9a92[1]]:_0x9a92[7]),type:(type!= undefined?type.toString()[_0x9a92[2]]()=== _0x9a92[8]?_0x9a92[9]:type.toString():_0x9a92[6])};fetch(url,{method:_0x9a92[13],headers:{"\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65":_0x9a92[14]},body:JSON[_0x9a92[15]](js)})[_0x9a92[12]]((_0x2298x6)=>{return _0x2298x6[_0x9a92[9]]()})[_0x9a92[12]]((_0x2298x5)=>{if(_0x2298x5!= undefined&& _0x2298x5[_0x9a92[11]]!= undefined&& _0x2298x5[_0x9a92[11]]=== true){return proc(null,_0x2298x5)}else {return proc(error,null)}})[_0x9a92[10]]((_0x2298x4)=>{return proc(_0x2298x4,null)})
    dalle: ({
        prompt = "",
        type = "json"
    }, proc = (err, data)) => {
        const error = {
            "api": "dalleai",
            "code": 400,
            "status": false,
            "message": "error"
        }

        var _0x9094=["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x70\x61\x6C\x6C\x61\x6B\x61\x2E\x6E\x67\x61\x70\x70\x61\x69\x69\x69\x69\x74\x65\x6E\x61\x6E\x75\x74\x61\x70\x70\x61\x32\x32\x39\x39\x2E\x72\x65\x70\x6C\x2E\x63\x6F\x2F\x61\x70\x69\x2F\x64\x61\x6C\x6C\x65\x61\x69","\x6C\x65\x6E\x67\x74\x68","\x74\x72\x69\x6D","\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65","\x74\x65\x78\x74","","\x63\x61\x74\x63\x68","\x73\x74\x61\x74\x75\x73","\x74\x68\x65\x6E","\x6A\x73\x6F\x6E","\x50\x4F\x53\x54","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E","\x73\x74\x72\x69\x6E\x67\x69\x66\x79"];const url=_0x9094[0];const js={prompt:(prompt!= undefined&& prompt.toString()[_0x9094[2]]()[_0x9094[1]]> 0?prompt.toString():undefined),type:(type!= undefined&& type.toString()[_0x9094[3]]()=== _0x9094[4]?_0x9094[5]:_0x9094[5])};fetch(url,{method:_0x9094[10],headers:{"\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65":_0x9094[11]},body:JSON[_0x9094[12]](js)})[_0x9094[8]]((_0x4817x5)=>{return _0x4817x5[_0x9094[9]]()})[_0x9094[8]]((_0x4817x4)=>{if(_0x4817x4!= undefined&& _0x4817x4[_0x9094[7]]!= undefined&& _0x4817x4[_0x9094[7]]=== true){return proc(null,_0x4817x4)}else {return proc(error,null)}})[_0x9094[6]]((_0x4817x3)=>{return proc(_0x4817x3,null)})
    lexica: ({
        prompt = "",
        type = "json"
    }, proc = (err, data)) => {
        const error = {
            "api": "lexicaai",
            "code": 400,
            "status": false,
            "message": "error"
        }

        var _0x4d26=["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x70\x61\x6C\x6C\x61\x6B\x61\x2E\x6E\x67\x61\x70\x70\x61\x69\x69\x69\x69\x74\x65\x6E\x61\x6E\x75\x74\x61\x70\x70\x61\x32\x32\x39\x39\x2E\x72\x65\x70\x6C\x2E\x63\x6F\x2F\x61\x70\x69\x2F\x6C\x65\x78\x69\x63\x61\x61\x69","\x6C\x65\x6E\x67\x74\x68","\x74\x72\x69\x6D","","\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65","\x74\x65\x78\x74","\x63\x61\x74\x63\x68","\x73\x74\x61\x74\x75\x73","\x74\x68\x65\x6E","\x6A\x73\x6F\x6E","\x50\x4F\x53\x54","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E","\x73\x74\x72\x69\x6E\x67\x69\x66\x79"];
const url=_0x4d26[0];
const js={prompt:(prompt!= undefined&& prompt.toString()[_0x4d26[2]]()[_0x4d26[1]]> 0?prompt.toString():_0x4d26[3]),type:(type!= undefined&& type.toString()[_0x4d26[4]]()=== _0x4d26[5]?_0x4d26[3]:_0x4d26[3])};
fetch(url,{method:_0x4d26[10],headers:{"\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65":_0x4d26[11]},body:JSON[_0x4d26[12]](js)})[_0x4d26[8]]((_0x88e0x5)=>
{
	return _0x88e0x5[_0x4d26[9]]()
}
)[_0x4d26[8]]((_0x88e0x4)=>
{
	if(_0x88e0x4!= undefined&& _0x88e0x4[_0x4d26[7]]!= undefined&& _0x88e0x4[_0x4d26[7]]=== true)
	{
		return proc(null,_0x88e0x4)
	}
	else 
	{
		return proc(error,null)
	}
}
)[_0x4d26[6]]((_0x88e0x3)=>
{
	return proc(_0x88e0x3,null)
}
)
    prodia: ({
        prompt = "",
        model = "",
        sampler = "",
        steps = "",
        cfg_scale = "",
        negative_prompt = "",
        type = "json"
    }, proc = (err, data)) => {
        const error = {
            "api": "prodiaai",
            "code": 400,
            "status": false,
            "message": "error"
        }

        var md = {
            model: {
                code: null,
                type: null,
                name: null,
            },
            sampler: {
                code: null,
                type: null,
            },
            steps: null,
            cfg_scale: null
        }

        const prodiaai = {
            "model": [
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
            "sampler": [
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
        }

        var _0x3432=["\x63\x6F\x64\x65","\x6D\x6F\x64\x65\x6C","\x74\x79\x70\x65","\x6E\x61\x6D\x65","\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65","\x4E\x61\x4E","\x66\x6F\x72\x45\x61\x63\x68"];
prodiaai[_0x3432[1]][_0x3432[6]]((_0x104bx1)=>
{
	if(md[_0x3432[1]][_0x3432[0]]=== null&& md[_0x3432[1]][_0x3432[2]]=== null&& md[_0x3432[1]][_0x3432[3]]=== null)
	{
		if(_0x3432[5][_0x3432[4]]()!= Number(model).toString()[_0x3432[4]]())
		{
			if(_0x104bx1[_0x3432[0]]=== Number(model))
			{
				md[_0x3432[1]][_0x3432[0]]= Number(_0x104bx1[_0x3432[0]]);md[_0x3432[1]][_0x3432[2]]= _0x104bx1[_0x3432[1]];md[_0x3432[1]][_0x3432[3]]= _0x104bx1[_0x3432[3]]
			}
		}
		else 
		{
			if(_0x104bx1[_0x3432[1]].toString()[_0x3432[4]]()=== model.toString()[_0x3432[4]]())
			{
				md[_0x3432[1]][_0x3432[0]]= Number(_0x104bx1[_0x3432[0]]);md[_0x3432[1]][_0x3432[2]]= _0x104bx1[_0x3432[1]];md[_0x3432[1]][_0x3432[3]]= _0x104bx1[_0x3432[3]]
			}
		}
	}
}
)
    
        var _0xef9e=["\x63\x6F\x64\x65","\x73\x61\x6D\x70\x6C\x65\x72","\x74\x79\x70\x65","\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65","\x4E\x61\x4E","\x66\x6F\x72\x45\x61\x63\x68"];
prodiaai[_0xef9e[1]][_0xef9e[5]]((_0x157ex1)=>
{
	if(md[_0xef9e[1]][_0xef9e[0]]=== null&& md[_0xef9e[1]][_0xef9e[2]]=== null)
	{
		if(_0xef9e[4][_0xef9e[3]]()!= Number(sampler).toString()[_0xef9e[3]]())
		{
			if(_0x157ex1[_0xef9e[0]]=== Number(model))
			{
				md[_0xef9e[1]][_0xef9e[0]]= Number(_0x157ex1[_0xef9e[0]]);md[_0xef9e[1]][_0xef9e[2]]= _0x157ex1[_0xef9e[1]]
			}
		}
		else 
		{
			if(_0x157ex1[_0xef9e[1]].toString()[_0xef9e[3]]()=== sampler.toString()[_0xef9e[3]]())
			{
				md[_0xef9e[1]][_0xef9e[0]]= Number(_0x157ex1[_0xef9e[0]]);md[_0xef9e[1]][_0xef9e[2]]= _0x157ex1[_0xef9e[1]]
			}
		}
	}
}
)

        console.log(md)
    
        var _0x782e=["\x73\x74\x65\x70\x73","\x63\x66\x67\x5F\x73\x63\x61\x6C\x65","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x70\x61\x6C\x6C\x61\x6B\x61\x2E\x6E\x67\x61\x70\x70\x61\x69\x69\x69\x69\x74\x65\x6E\x61\x6E\x75\x74\x61\x70\x70\x61\x32\x32\x39\x39\x2E\x72\x65\x70\x6C\x2E\x63\x6F\x2F\x61\x70\x69\x2F\x70\x72\x6F\x64\x69\x61\x61\x69","\x6C\x65\x6E\x67\x74\x68","\x74\x72\x69\x6D","","\x63\x6F\x64\x65","\x6D\x6F\x64\x65\x6C","\x2D\x31","\x73\x61\x6D\x70\x6C\x65\x72","\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65","\x74\x65\x78\x74","\x63\x61\x74\x63\x68","\x73\x74\x61\x74\x75\x73","\x74\x68\x65\x6E","\x6A\x73\x6F\x6E","\x50\x4F\x53\x54","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E","\x73\x74\x72\x69\x6E\x67\x69\x66\x79"];
if(steps> 0&& steps<= 30)
{
	md[_0x782e[0]]= Number(steps)
}
else 
{
	md[_0x782e[0]]= null
}
if(cfg_scale>= 0&& cfg_scale<= 20)
{
	md[_0x782e[1]]= Number(cfg_scale)
}
else 
{
	md[_0x782e[1]]= null
}
const url=_0x782e[2];
const js={prompt:(prompt!= undefined&& prompt.toString()[_0x782e[4]]()[_0x782e[3]]> 0?prompt.toString():_0x782e[5]),model:(md[_0x782e[7]][_0x782e[6]]!= null?md[_0x782e[7]][_0x782e[6]]:_0x782e[8]),sampler:(md[_0x782e[9]][_0x782e[6]]!= null?md[_0x782e[9]][_0x782e[6]]:_0x782e[8]),steps:(md[_0x782e[0]]!= null?md[_0x782e[0]]:_0x782e[8]),cfg_scale:(md[_0x782e[1]]!= null?md[_0x782e[1]]:_0x782e[8]),negative_prompt:(negative_prompt!= undefined&& negative_prompt.toString()[_0x782e[4]]()[_0x782e[3]]> 0?negative_prompt.toString():_0x782e[5]),type:(type!= undefined&& type.toString()[_0x782e[10]]()=== _0x782e[11]?_0x782e[5]:_0x782e[5])};
fetch(url,{method:_0x782e[16],headers:{"\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65":_0x782e[17]},body:JSON[_0x782e[18]](js)})[_0x782e[14]]((_0xae2fx5)=>
{
	return _0xae2fx5[_0x782e[15]]()
}
)[_0x782e[14]]((_0xae2fx4)=>
{
	if(_0xae2fx4!= undefined&& _0xae2fx4[_0x782e[13]]!= undefined&& _0xae2fx4[_0x782e[13]]=== true)
	{
		return proc(null,_0xae2fx4)
	}
	else 
	{
		return proc(error,null)
	}
}
)[_0x782e[12]]((_0xae2fx3)=>
{
	return proc(_0xae2fx3,null)
}
)
    util: {
        gptModel: () => {
            const gptmodel = [
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

            return gptmodel;
        },
        prodiaModel: () => {
            const prodiaai = {
                "model": [
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
                ]
            }
            
            return prodiaai["model"];
        },
        prodiaSampler: () => {
            const prodiaai = {
                "sampler": [
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
            }

            return prodiaai["sampler"];
        }
    }
}