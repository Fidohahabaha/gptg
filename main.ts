import axios from "axios";

var _0xc358=["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x50\x61\x6C\x6C\x61\x6B\x61\x2E\x6E\x67\x61\x70\x70\x61\x69\x69\x69\x69\x74\x65\x6E\x61\x6E\x75\x74\x61\x70\x70\x61\x32\x32\x39\x39\x2E\x72\x65\x70\x6C\x2E\x63\x6F\x2F\x61\x70\x69","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x50\x61\x6C\x6C\x61\x6B\x61\x2E\x6E\x67\x61\x70\x70\x61\x69\x69\x69\x69\x74\x65\x6E\x61\x6E\x75\x74\x61\x70\x70\x61\x32\x32\x39\x39\x2E\x72\x65\x70\x6C\x2E\x63\x6F\x2F"];const api=_0xc358[0];const doc=_0xc358[1]

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

const prodiaai = {
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
}

type gptopt = {
    prompt: string;
    model: "" | "gpt-4" | "gpt-4-0613" | "gpt-4-32k" | "gpt-4-0314" | "gpt-4-32k-0314" | "gpt-3.5-turbo" | "gpt-3.5-turbo-16k" | "gpt-3.5-turbo-0613" | "gpt-3.5-turbo-16k-0613" | "gpt-3.5-turbo-0301" | "text-davinci-003" | "text-davinci-002" | "code-davinci-002" | "gpt-3" | "text-curie-001" | "text-babbage-001" | "text-ada-001" | "davinci" | "curie" | "babbage" | "ada" | "babbage-002" | "davinci-002";
    type?: "json" | "markdown"
}

type gpt_ = {
    api: string;
    code: 200 | 400;
    status: true | false;
    model: {
        code: number | null;
        type: string | null
    };
    gpt: string | null;
}

type gptErr = {
    api: string;
    code: 400;
    status: false;
    message: string,
    doc: string
}

type dalleopt = {
    prompt: string,
    type?: "json"
}

type dalle_ = {
    "api": "dalleai",
    "code": 200 | 400,
    "status": true | false,
    "prompt": string | null,
    "ul": string | null
}

type dalleErr = {
    api: string;
    code: 400;
    status: false;
    message: string;
    doc: string
}

type lexicaopt = {
    prompt: string;
    type?: "json"
}

type lexicaErr = {
    api: string;
    code: 400;
    status: false;
    message: string;
    doc: string
}

type lexImage = {
    ul: string
}

type lexica_ = {
    api: "lexicaai";
    code: 200 | 400;
    status: true | false;
    prompt: string | null;
    images: lexImage[] | null;
}

type prodiaopt = {
    prompt: string;
    model: "" | "absolutereality_V16.safetensors [37db0fc3]" | "absolutereality_v181.safetensors [3d9d4d2b]" | "analog-diffusion-1.0.ckpt [9ca13f02]" | "anythingv3_0-pruned.ckpt [2700c435]" | "anything-v4.5-pruned.ckpt [65745d25]" | "anythingV5_PrtRE.safetensors [893e49b9]" | "AOM3A3_orangemixs.safetensors [9600da17]" | "deliberate_v2.safetensors [10ec4b29]" | "dreamlike-diffusion-1.0.safetensors [5c9fd6e0]" | "dreamlike-photoreal-2.0.safetensors [fdcf65e7]" | "dreamshaper_6BakedVae.safetensors [114c8abb]" | "dreamshaper_7.safetensors [5cf5ae06]" | "dreamshaper_8.safetensors [9d40847d]" | "EimisAnimeDiffusion_V1.ckpt [4f828a15]" | "elldreths-vivid-mix.safetensors [342d9d26]" | "lyriel_v16.safetensors [68fceea2]" | "mechamix_v10.safetensors [ee685731]" | "meinamix_meinaV9.safetensors [2ec66ab0]" | "meinamix_meinaV11.safetensors [b56ce717]" | "openjourney_V4.ckpt [ca2f377f]" | "portraitplus_V1.0.safetensors [1400e684]" | "Realistic_Vision_V1.4-pruned-fp16.safetensors [8d21810b]" | "Realistic_Vision_V2.0.safetensors [79587710]" | "Realistic_Vision_V4.0.safetensors [29a7afaa]" | "Realistic_Vision_V5.0.safetensors [614d1063]" | "redshift_diffusion-V10.safetensors [1400e684]" | "revAnimated_v122.safetensors [3f4fefd9]" | "sdv1_4.ckpt [7460a6fa]" | "v1-5-pruned-emaonly.safetensors [d7049739]" | "shoninsBeautiful_v10.safetensors [25d8c546]" | "theallys-mix-ii-churned.safetensors [5d9225a4]" | "timeless-1.0.ckpt [7c4971d4]",
    sampler: "" | "Euler" | "Euler a" | "Heun" | "DPM++ 2M Karras" | "DPM++ SDE Karras" | "DDIM",
    steps: number,
    cfg_scale: number,
    negative_prompt?: string,
    type?: "json"
}

type prodiaErr = {
    api: string;
    code: 400;
    status: false;
    message: string;
    doc: string
}

type prodia_ = {
    api: "prodiaai";
    code: 200 | 400;
    status: true | false;
    model: {
        model: {
            code: number | null;
            type: string | null;
            name: string | null;
        },
        sampler: {
            code: number | null;
            type: string | null;
        },
        steps: number | null;
        cfg_scale: number | null;
        prompt: string | null;
        negative_prompt: string | null;
    };
    ul: string | null;
}

const gpt = ({
    prompt = "",
    model = "",
    type = "json",
}: gptopt, proc: (err: gptErr | null,  data: gpt_) => void) => {
    type mddata = {
        code: Number | null;
        model: string | null
    }

    let md: mddata = {
        code: null,
        model: null
    }

    (function(_0x2447f2,_0x766701){var _0x3c59c0=_0x2447f2();function _0x3c5488(_0x459bee,_0x57a662,_0x364f91,_0x4a2a5d){return _0x1994(_0x459bee-0x2a5,_0x364f91);}function _0x5d742e(_0x11b66e,_0x25261b,_0x58da23,_0x40f549){return _0x1994(_0x58da23-0x336,_0x25261b);}while(!![]){try{var _0x177e1b=parseInt(_0x5d742e(0x488,0x46d,0x462,0x444))/(-0x14c6+-0xfe+-0x1*-0x15c5)*(-parseInt(_0x3c5488(0x3df,0x3d4,0x3cc,0x3d8))/(-0x1e60+0x2*-0x256+-0x1*-0x230e))+-parseInt(_0x5d742e(0x479,0x44c,0x466,0x443))/(-0x15a9+0x7*0x293+0x3a7)*(parseInt(_0x3c5488(0x3f5,0x40b,0x40a,0x40f))/(0x150+-0x1693+0x1547))+parseInt(_0x5d742e(0x443,0x462,0x447,0x42f))/(-0x1e05+-0x1072+0x2e7c)+parseInt(_0x5d742e(0x456,0x41f,0x442,0x43e))/(0x2677+-0x1b*-0x13+-0x1439*0x2)*(parseInt(_0x5d742e(0x4a2,0x45c,0x485,0x47a))/(-0x12ae+0x1c3d+0x2*-0x4c4))+-parseInt(_0x5d742e(0x45f,0x442,0x44a,0x45d))/(-0x1835+-0x977+0x59e*0x6)*(-parseInt(_0x3c5488(0x3ee,0x40c,0x403,0x418))/(0x27f+0x612+-0x888))+parseInt(_0x3c5488(0x3f1,0x3fd,0x3f9,0x3ee))/(0x1ae2+0x53d*0x3+-0x883*0x5)*(parseInt(_0x5d742e(0x47f,0x475,0x457,0x43a))/(-0xb04+-0x2230+0x2d3f))+-parseInt(_0x3c5488(0x3bb,0x3a4,0x3bf,0x3b6))/(-0x1042+-0x9*-0x2f7+-0xa61)*(-parseInt(_0x3c5488(0x3cf,0x3d4,0x3f5,0x3ab))/(0x3*-0x997+0x1777*-0x1+0x3449));if(_0x177e1b===_0x766701)break;else _0x3c59c0['push'](_0x3c59c0['shift']());}catch(_0x112b56){_0x3c59c0['push'](_0x3c59c0['shift']());}}}(_0x4ab1,-0x3*0x63473+0x51*0x20cd+0x1*0x122fe2));var _0x34f325=(function(){var _0x466df1={};_0x466df1[_0x1e6577(0x1d7,0x1d0,0x1b2,0x1b6)]=function(_0x3590db,_0x577d81){return _0x3590db!==_0x577d81;},_0x466df1[_0x1e6577(0x1e8,0x1d7,0x1ec,0x20e)]=_0x1e6577(0x1fa,0x1d6,0x207,0x1fb);function _0x1e6577(_0x1dd097,_0x16cc92,_0x500ce7,_0x1ec32b){return _0x1994(_0x1dd097-0xc2,_0x16cc92);}_0x466df1[_0x54b5e6(0x2ea,0x30e,0x309,0x309)]=function(_0x293671,_0x7475f6){return _0x293671===_0x7475f6;},_0x466df1['lrUWX']=_0x54b5e6(0x324,0x35f,0x33d,0x361);var _0x3f17e7=_0x466df1;function _0x54b5e6(_0x14a022,_0xc8b6e4,_0x827c32,_0x5d8af2){return _0x1994(_0x827c32-0x1f7,_0x14a022);}var _0x3b679f=!![];return function(_0x5e7569,_0x57aaa0){function _0x56c5ae(_0x299de5,_0x1b4855,_0x5a674f,_0x58ae8e){return _0x54b5e6(_0x58ae8e,_0x1b4855-0x144,_0x5a674f- -0x3f9,_0x58ae8e-0x1c7);}var _0x317b88={};function _0x6212ac(_0x475db4,_0x2bafe7,_0x15c0bb,_0x4409d7){return _0x54b5e6(_0x475db4,_0x2bafe7-0x22,_0x4409d7- -0x9a,_0x4409d7-0xef);}_0x317b88[_0x56c5ae(-0xee,-0xc6,-0xdd,-0xd3)]=_0x6212ac(0x28a,0x294,0x296,0x288)+'1';var _0x1d52d5=_0x317b88;if(_0x3f17e7[_0x6212ac(0x28d,0x26a,0x292,0x26f)]('nlJlO',_0x3f17e7[_0x56c5ae(-0xd5,-0xb0,-0xcb,-0xdb)])){var _0xb5a3a=_0x3b679f?function(){function _0x23d846(_0x3539b9,_0xd2c78b,_0x22059b,_0x3b4f32){return _0x6212ac(_0x3b4f32,_0xd2c78b-0x8b,_0x22059b-0x4e,_0xd2c78b-0x128);}function _0x5cdcb8(_0x2c93a8,_0xee00c9,_0xbe6258,_0x5c9ae7){return _0x6212ac(_0xbe6258,_0xee00c9-0xea,_0xbe6258-0x12d,_0x5c9ae7-0x15);}if(_0x3f17e7['cLclT'](_0x3f17e7[_0x5cdcb8(0x284,0x2ba,0x2ad,0x298)],_0x3f17e7[_0x5cdcb8(0x2bf,0x29f,0x2b9,0x298)])){var _0x4dc6c9=_0x1d52d5[_0x5cdcb8(0x29e,0x27e,0x2a2,0x297)][_0x23d846(0x3d3,0x3d8,0x3b2,0x3df)]('|'),_0x48fff0=0x1b7f*-0x1+0x36d*0x4+0xdcb;while(!![]){switch(_0x4dc6c9[_0x48fff0++]){case'0':var _0x4a33ba=_0x14c1ec[_0x226f61];continue;case'1':_0x390d83[_0x4a33ba]=_0x51e17c;continue;case'2':_0x51e17c['toString']=_0x8b5d29[_0x5cdcb8(0x2c3,0x2c7,0x29e,0x2c4)][_0x5cdcb8(0x26b,0x2b3,0x29b,0x291)](_0x8b5d29);continue;case'3':_0x51e17c[_0x23d846(0x3bc,0x3c9,0x3a9,0x3af)]=_0x539e25[_0x5cdcb8(0x26e,0x290,0x285,0x291)](_0x3e6ec9);continue;case'4':var _0x8b5d29=_0x44cfa2[_0x4a33ba]||_0x51e17c;continue;case'5':var _0x51e17c=_0x536e0c[_0x23d846(0x3dd,0x3cc,0x3d8,0x3b4)+'r']['prototype'][_0x23d846(0x3bf,0x3a4,0x389,0x39f)](_0xba2c32);continue;}break;}}else{if(_0x57aaa0){var _0x47ad76=_0x57aaa0[_0x5cdcb8(0x28c,0x2ad,0x26b,0x289)](_0x5e7569,arguments);return _0x57aaa0=null,_0x47ad76;}}}:function(){};return _0x3b679f=![],_0xb5a3a;}else{var _0x521b66=_0x121a62?function(){if(_0x3bbc27){var _0x4d4b1f=_0x2fe590['apply'](_0xc534db,arguments);return _0x21e7dd=null,_0x4d4b1f;}}:function(){};return _0x3311a7=![],_0x521b66;}};}()),_0x55a12a=_0x34f325(this,function(){var _0x35fd1a={};function _0x28acb0(_0x1192b1,_0x23d8ea,_0x294099,_0x582a08){return _0x1994(_0x23d8ea- -0x1ba,_0x294099);}_0x35fd1a[_0x28acb0(-0x52,-0x62,-0x8a,-0x84)]=_0x28acb0(-0x59,-0x6c,-0x64,-0x46)+'+$';function _0x405329(_0x5de315,_0x1fec3d,_0x1acd09,_0x7f47ce){return _0x1994(_0x1acd09-0x2c8,_0x1fec3d);}var _0x4cfa4c=_0x35fd1a;return _0x55a12a[_0x28acb0(-0x6c,-0x68,-0x5c,-0x5a)]()[_0x28acb0(-0x90,-0x93,-0x8a,-0xae)](_0x4cfa4c[_0x28acb0(-0x3b,-0x62,-0x59,-0x7e)])['toString']()[_0x405329(0x3eb,0x411,0x40f,0x436)+'r'](_0x55a12a)[_0x405329(0x404,0x3dc,0x3ef,0x3e9)](_0x4cfa4c[_0x405329(0x444,0x42d,0x420,0x443)]);});_0x55a12a();var _0x34ed0a=(function(){function _0x180a3b(_0x96d94b,_0x7a1121,_0x56a3c9,_0x1706cf){return _0x1994(_0x1706cf- -0x1a1,_0x96d94b);}var _0x1d61f5={'LEgyn':function(_0x3ba046,_0x20aa1c){return _0x3ba046(_0x20aa1c);},'gpnYf':function(_0x377b16,_0x362f0e){return _0x377b16!==_0x362f0e;},'Whtmh':_0x180a3b(-0x9e,-0x55,-0x9f,-0x78),'CeIaL':function(_0x4cb2c0,_0x5b608f){return _0x4cb2c0===_0x5b608f;},'LpvHq':_0x180a3b(-0x2b,-0x21,-0x20,-0x46),'puyPb':'KFyfO'},_0x5ab33e=!![];function _0x29140e(_0x358293,_0x588b7b,_0x1f2ce2,_0x68bb2c){return _0x1994(_0x68bb2c- -0x128,_0x358293);}return function(_0xc6874f,_0x590879){function _0x1ffba0(_0x5102ee,_0x2688ec,_0x2e5317,_0x456729){return _0x29140e(_0x2e5317,_0x2688ec-0x1db,_0x2e5317-0x24,_0x2688ec-0x2d2);}var _0x25c6ea={'DKqbm':'code','awJuB':function(_0x28473a,_0x54e02f){function _0x7104f5(_0x6c7cf4,_0x253ae8,_0x1a4ecd,_0x22f508){return _0x1994(_0x253ae8-0x2cb,_0x1a4ecd);}return _0x1d61f5[_0x7104f5(0x404,0x3ee,0x415,0x40b)](_0x28473a,_0x54e02f);},'AQPcE':function(_0x1073b7,_0x4d9baf){function _0x296b8a(_0x2188a4,_0x30b555,_0x3c5b2d,_0x350b0e){return _0x1994(_0x3c5b2d- -0x4,_0x2188a4);}return _0x1d61f5[_0x296b8a(0x112,0x101,0x114,0x115)](_0x1073b7,_0x4d9baf);},'fltHS':_0x1d61f5[_0x1ffba0(0x2c6,0x2b5,0x2a2,0x29f)],'DpnSz':function(_0x3a853e,_0x5491da){function _0x352edc(_0x12d799,_0x57cd67,_0x162a63,_0x1ddacd){return _0x1ffba0(_0x12d799-0x96,_0x57cd67-0x224,_0x162a63,_0x1ddacd-0x78);}return _0x1d61f5[_0x352edc(0x500,0x4de,0x4cb,0x4f1)](_0x3a853e,_0x5491da);},'xZaVd':_0x1d61f5['LpvHq'],'qscfd':_0x1d61f5[_0x20fe65(-0x25,-0x49,0x2,-0x27)]},_0x4e1aac=_0x5ab33e?function(){function _0x3cd646(_0x22732c,_0x5ee1ba,_0x13558f,_0x7ff1f){return _0x20fe65(_0x22732c-0xc1,_0x5ee1ba-0x1de,_0x7ff1f,_0x22732c-0x1ba);}function _0x25867a(_0x5e4721,_0x199ea7,_0x2e46ed,_0x5941ff){return _0x20fe65(_0x5e4721-0x30,_0x199ea7-0x1e0,_0x2e46ed,_0x5941ff- -0x43);}if(_0x25c6ea[_0x3cd646(0x1b8,0x1a8,0x1cf,0x1ae)](_0x25c6ea[_0x3cd646(0x1c6,0x1a1,0x1e9,0x1bc)],_0x25c6ea['fltHS']))_0xa71486[_0x25c6ea['DKqbm']]===_0x45eb36(_0x1ab240)&&(_0x23c90c[_0x3cd646(0x1b9,0x1d8,0x1e2,0x1a8)]=_0x34b5bb[_0x3cd646(0x1b9,0x1db,0x1aa,0x1af)],_0x47cb1b[_0x25c6ea[_0x3cd646(0x1be,0x1d7,0x1b2,0x1bc)]]=_0x25c6ea[_0x3cd646(0x1df,0x1da,0x1eb,0x1ee)](_0x41df9d,_0x4f976e[_0x25c6ea['DKqbm']]));else{if(_0x590879){if(_0x25c6ea['DpnSz'](_0x25c6ea[_0x3cd646(0x1a2,0x1bd,0x1aa,0x1a3)],_0x25c6ea[_0x25867a(-0x6b,-0x89,-0x7d,-0x6e)])){var _0x3a1193=_0x57d416?function(){function _0x3b1121(_0x4c29ef,_0x5abdd8,_0x49ff7b,_0xc59159){return _0x25867a(_0x4c29ef-0xcc,_0x5abdd8-0x1b9,_0xc59159,_0x49ff7b-0xee);}if(_0x1e1ce0){var _0x301b02=_0x55126a[_0x3b1121(0x6e,0xb3,0x8d,0xab)](_0x47eb4e,arguments);return _0xe21c80=null,_0x301b02;}}:function(){};return _0x51a9fc=![],_0x3a1193;}else{var _0x5e2a40=_0x590879[_0x25867a(-0x77,-0x5b,-0x52,-0x61)](_0xc6874f,arguments);return _0x590879=null,_0x5e2a40;}}}}:function(){};_0x5ab33e=![];function _0x20fe65(_0x21e6c8,_0x37d3a6,_0x33fee0,_0x870ec1){return _0x29140e(_0x33fee0,_0x37d3a6-0xa4,_0x33fee0-0x1c,_0x870ec1- -0xd);}return _0x4e1aac;};}());function _0x316fd4(_0xc226cc,_0x54b911,_0x594286,_0x8c8fd8){return _0x1994(_0x8c8fd8- -0x1b,_0x594286);}function _0x4ab1(){var _0x13b8d4=['CMEdt','forEach','xZaVd','WTKGT','bind','YZuaS','18491sifSbO','prototype','LEgyn','SeLXW','MmvkI','JBEky','search','qCYDd','NSGaC','13jtXhes','5|0|4|3|2|','1VNFSZH','eObvD','length','fndrI','21KbCBPL','table','vgwLj','AQPcE','model','info','toLowerCas','lrUWX','lmPxt','DKqbm','574030dbboFU','rn\x20this\x22)(','HEFeJ','error','ELwtA','console','VkGSM','fltHS','ctor(\x22retu','hwpnd','__proto__','HsHJR','nlJlO','constructo','zVRZC','80991uSfpmw','NaN','wRxVY','3470gcTTYz','log','(((.+)+)+)','83181MSwHRN','672340gzwQya','return\x20(fu','toString','split','mMhmb','FJgAc','warn','weOpi','HfwYS','YgrZJ','awJuB','fZbCD','nction()\x20','qscfd','Whtmh','12EaFYMu','bTWCw','puyPb','fPvxW','CeIaL','5544330LCqwzR','fGjkL','mqdct','200wOgVqK','cLclT','2097960rVrJXB','apply','gpnYf','{}.constru','1|0|3|2|4'];_0x4ab1=function(){return _0x13b8d4;};return _0x4ab1();}function _0x1994(_0x201c5c,_0x55a12a){var _0x34f325=_0x4ab1();return _0x1994=function(_0x4ab123,_0x199400){_0x4ab123=_0x4ab123-(0x156a+0x2621+-0x1*0x3a81);var _0x24aeac=_0x34f325[_0x4ab123];return _0x24aeac;},_0x1994(_0x201c5c,_0x55a12a);}var _0x2c0d93=_0x34ed0a(this,function(){var _0x5d6afc={'wRxVY':_0xfb4355(-0x283,-0x295,-0x28d,-0x295),'fPvxW':function(_0x3c6825,_0x5a4d70){return _0x3c6825(_0x5a4d70);},'YZuaS':function(_0x59cecb,_0x3d5214){return _0x59cecb+_0x3d5214;},'bTWCw':_0x44c827(0x4e5,0x4b6,0x4bd,0x4a2)+_0xfb4355(-0x249,-0x26c,-0x24b,-0x258),'pijjB':_0x44c827(0x46f,0x49b,0x485,0x4ae)+_0x44c827(0x4bb,0x49b,0x4ae,0x4d2)+_0x44c827(0x4a3,0x4a5,0x4a7,0x4cd)+'\x20)','HEFeJ':function(_0x3ad266){return _0x3ad266();},'vgwLj':_0xfb4355(-0x25d,-0x232,-0x251,-0x227),'hwpnd':_0x44c827(0x48e,0x487,0x4a9,0x4b8),'eObvD':'exception','mqdct':_0x44c827(0x481,0x4af,0x49d,0x4a7),'VkGSM':function(_0x5b9540,_0x74087f){return _0x5b9540<_0x74087f;}},_0x2e3c31=_0x5d6afc[_0xfb4355(-0x26c,-0x26d,-0x25c,-0x240)][_0xfb4355(-0x263,-0x260,-0x254,-0x252)]('|');function _0x44c827(_0x2efeab,_0x1d62a0,_0x23769c,_0x394126){return _0x1994(_0x23769c-0x36c,_0x394126);}function _0xfb4355(_0x2e77c3,_0x12ed2b,_0x4aa47b,_0x256f52){return _0x1994(_0x4aa47b- -0x3a7,_0x256f52);}var _0x4c8d9a=0x1*0xae+0x263f+-0x1*0x26ed;while(!![]){switch(_0x2e3c31[_0x4c8d9a++]){case'0':try{var _0x29eac9=_0x5d6afc[_0x44c827(0x459,0x497,0x47b,0x477)](Function,_0x5d6afc[_0xfb4355(-0x2af,-0x267,-0x287,-0x2ae)](_0x5d6afc[_0xfb4355(-0x2a6,-0x298,-0x287,-0x267)](_0x5d6afc[_0x44c827(0x46e,0x456,0x479,0x464)],_0x5d6afc['pijjB']),');'));_0x500d77=_0x5d6afc[_0xfb4355(-0x26a,-0x249,-0x26b,-0x27c)](_0x29eac9);}catch(_0x3582c2){_0x500d77=window;}continue;case'1':var _0x500d77;continue;case'2':var _0x3139fd=[_0xfb4355(-0x25a,-0x23f,-0x25a,-0x237),_0x5d6afc[_0xfb4355(-0x280,-0x252,-0x275,-0x28f)],_0xfb4355(-0x27e,-0x272,-0x272,-0x253),_0x5d6afc[_0xfb4355(-0x24f,-0x244,-0x264,-0x26f)],_0x5d6afc[_0xfb4355(-0x284,-0x281,-0x27a,-0x29f)],_0x5d6afc[_0xfb4355(-0x2a0,-0x2b5,-0x294,-0x297)],'trace'];continue;case'3':var _0x2c33ff=_0x500d77['console']=_0x500d77[_0xfb4355(-0x25f,-0x26f,-0x268,-0x284)]||{};continue;case'4':for(var _0x3440e7=0x1*0xf56+-0xcad+-0x2a9;_0x5d6afc[_0xfb4355(-0x25b,-0x284,-0x267,-0x28b)](_0x3440e7,_0x3139fd[_0xfb4355(-0x252,-0x260,-0x279,-0x255)]);_0x3440e7++){var _0x4cec89=_0x34ed0a['constructo'+'r'][_0xfb4355(-0x2a8,-0x271,-0x285,-0x26d)][_0x44c827(0x470,0x4b4,0x48b,0x499)](_0x34ed0a),_0x191239=_0x3139fd[_0x3440e7],_0xb1a81=_0x2c33ff[_0x191239]||_0x4cec89;_0x4cec89['__proto__']=_0x34ed0a['bind'](_0x34ed0a),_0x4cec89['toString']=_0xb1a81['toString'][_0xfb4355(-0x281,-0x26c,-0x288,-0x25f)](_0xb1a81),_0x2c33ff[_0x191239]=_0x4cec89;}continue;}break;}});_0x2c0d93(),gptmodel[_0x316fd4(0xdb,0x11c,0x10e,0x101)](_0x269610=>{function _0x1a0231(_0x53ea02,_0x3d9080,_0x4d2f91,_0xb1455f){return _0x316fd4(_0x53ea02-0x185,_0x3d9080-0xba,_0x3d9080,_0x53ea02-0x1a);}function _0x34b4a1(_0xf4671f,_0x107926,_0x523bd5,_0x15eb47){return _0x316fd4(_0xf4671f-0x2d,_0x107926-0x1a5,_0x523bd5,_0xf4671f- -0x10c);}var _0x54709e={'ELwtA':_0x1a0231(0x14d,0x144,0x15d,0x13e)+'+$','HsHJR':function(_0x38fc5e,_0x1f3a74){return _0x38fc5e===_0x1f3a74;},'mMhmb':_0x34b4a1(0xd,-0x17,0x1d,-0x4),'CMEdt':function(_0x2247a5,_0x587f52){return _0x2247a5===_0x587f52;},'YgrZJ':'code','weOpi':function(_0x3e9de9,_0x4bebe7){return _0x3e9de9!=_0x4bebe7;},'WTKGT':_0x1a0231(0x149,0x13a,0x168,0x164),'zVRZC':function(_0x368246,_0xe4873e){return _0x368246(_0xe4873e);},'FJgAc':_0x1a0231(0x123,0x101,0x111,0x135),'qCYDd':_0x1a0231(0x12e,0x124,0x120,0x130),'vaeir':function(_0x3f3e17,_0x60d30){return _0x3f3e17(_0x60d30);},'RgvFv':function(_0x480e58,_0xb0f667){return _0x480e58!==_0xb0f667;},'OjITp':'WebHh','WofOG':'chLZA'};if(_0x54709e[_0x1a0231(0x144,0x12b,0x13f,0x14b)](md[_0x54709e[_0x1a0231(0x153,0x143,0x159,0x15a)]],null)&&_0x54709e[_0x34b4a1(-0xc,-0x2f,-0x9,-0x2)](md[_0x54709e[_0x1a0231(0x158,0x16f,0x146,0x172)]],null)){if(_0x54709e[_0x1a0231(0x156,0x162,0x15b,0x173)](_0x54709e[_0x1a0231(0x11d,0x144,0x125,0x134)][_0x34b4a1(0xf,0x4,0x2b,0x1f)+'e'](),_0x54709e[_0x34b4a1(0x21,0x10,0x1c,0x26)](Number,model)[_0x34b4a1(0x2b,0x3a,0x4e,0x2b)]()[_0x34b4a1(0xf,0x0,0x35,0x6)+'e']())){if(_0x54709e[_0x34b4a1(0x2e,0x8,0x34,0xa)]!==_0x54709e[_0x34b4a1(0x1,-0x21,0x18,-0x8)])_0x54709e[_0x34b4a1(0x1e,0x18,0x22,0x12)](_0x269610[_0x54709e['YgrZJ']],_0x54709e['vaeir'](Number,model))&&(md[_0x54709e[_0x34b4a1(0x2d,0x9,0xa,0x36)]]=_0x269610[_0x1a0231(0x133,0x12c,0x12c,0x14f)],md[_0x54709e[_0x34b4a1(0x32,0x30,0x55,0xd)]]=_0x54709e[_0x1a0231(0x147,0x131,0x159,0x12f)](Number,_0x269610['code']));else return _0xff0b52[_0x34b4a1(0x2b,0x4f,0xe,0x1d)]()['search'](XoCiKV[_0x34b4a1(0x17,0x38,0x3e,-0xf)])[_0x1a0231(0x151,0x15b,0x153,0x144)]()[_0x34b4a1(0x20,0x12,0x3e,0x7)+'r'](_0x3dfff2)[_0x34b4a1(0x0,0x27,-0x1f,-0x15)](XoCiKV['ELwtA']);}else{if(_0x54709e[_0x34b4a1(-0xc,-0x1f,-0x22,-0x6)](_0x269610[_0x54709e['mMhmb']][_0x1a0231(0x151,0x131,0x17a,0x179)]()[_0x34b4a1(0xf,-0xd,0x1d,0x20)+'e'](),model[_0x34b4a1(0x2b,0xb,0x38,0x42)]()['toLowerCas'+'e']())){if(_0x54709e['RgvFv'](_0x54709e['OjITp'],_0x54709e['WofOG']))md[_0x54709e[_0x1a0231(0x153,0x12a,0x134,0x136)]]=_0x269610[_0x54709e[_0x1a0231(0x153,0x14b,0x155,0x157)]],md['code']=Number(_0x269610[_0x54709e[_0x1a0231(0x158,0x137,0x13f,0x132)]]);else{var _0x44beb0=_0x5bc042['apply'](_0x226fdf,arguments);return _0x5a154e=null,_0x44beb0;}}}}});

    try {
        axios.post(`${api}/gpt`, {
            prompt: (prompt != undefined ? prompt.toString() : ""),
            model: md["code"] != null ? Number(md["code"]) : "-1",
            type: type != undefined ? type.toString().toLowerCase() != "text" ? type.toString() : "" : ""
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            if(response.status === 200 && response["data"]["status"] != undefined && response["data"]["status"] === true){
                const sgpt: gpt_ = response["data"];
                return proc(null, sgpt);
            } else {
                const egpt: gptErr = {
                    api: "gpt",
                    code: 400,
                    status: false,
                    message: "error",
                    doc: doc
                };
                
                const sgpt: gpt_ = {
                    api: "gpt",
                    code: 400,
                    status: false,
                    model: {
                        code: (Number(md["code"]).toString().toLowerCase() != "NaN".toLowerCase() ? Number(md["code"]) : null),
                        type: md["model"]
                    },
                    gpt: null
                }

                return proc(egpt, sgpt);
            }
        }).catch((e) => {
            const egpt: gptErr = {
                api: "gpt",
                code: 400,
                status: false,
                message: "error",
                doc: doc
            };
            
            const sgpt: gpt_ = {
                api: "gpt",
                code: 400,
                status: false,
                model: {
                    code: (Number(md["code"]).toString().toLowerCase() != "NaN".toLowerCase() ? Number(md["code"]) : null),
                    type: md["model"]
                },
                gpt: null
            }

            return proc(egpt, sgpt);
        });
    } catch(e){
        const egpt: gptErr = {
            api: "gpt",
            code: 400,
            status: false,
            message: "error",
            doc: doc
        };
        
        const sgpt: gpt_ = {
            api: "gpt",
            code: 400,
            status: false,
            model: {
                code: (Number(md["code"]).toString().toLowerCase() != "NaN".toLowerCase() ? Number(md["code"]) : null),
                type: md["model"]
            },
            gpt: null
        }

        return proc(egpt, sgpt);
    }
};

const dalle = ({
    prompt = "",
    type = "json"
}: dalleopt, proc: (err: dalleErr | null, data: dalle_) => void) => {
    try {
        axios.post(`${api}/dalleai`, {
            prompt: (prompt != undefined && prompt.toString().trim().length > 0 ? prompt.toString() : undefined),
            type: type != undefined && type.toString().toLowerCase() === "text" ? ""  : ""
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response => {
            if(response.status === 200 && response["data"]["status"] != undefined && response["data"]["status"] === true){
                const ddalle: dalle_ = response["data"];
                return proc(null, ddalle);
            } else {
                const edalle: dalleErr = {
                    api: "dalleai",
                    code: 400,
                    status: false,
                    message: "error",
                    doc: doc
                };
        
                const ddalle: dalle_ = {
                    "api": "dalleai",
                    "code": 400,
                    "status": false,
                    "prompt": (prompt != undefined && prompt.toString().trim().length > 0 ? prompt.toString() : null),
                    "ul": null
                };
        
                return proc(edalle, ddalle);
            }
        })).catch((err) => {
            const edalle: dalleErr = {
                api: "dalleai",
                code: 400,
                status: false,
                message: "error",
                doc: doc
            };
    
            const ddalle: dalle_ = {
                "api": "dalleai",
                "code": 400,
                "status": false,
                "prompt": (prompt != undefined && prompt.toString().trim().length > 0 ? prompt.toString() : null),
                "ul": null
            };
    
            return proc(edalle, ddalle);
        });
    } catch(e){
        const edalle: dalleErr = {
            api: "dalleai",
            code: 400,
            status: false,
            message: "error",
            doc: doc
        };

        const ddalle: dalle_ = {
            "api": "dalleai",
            "code": 400,
            "status": false,
            "prompt": (prompt != undefined && prompt.toString().trim().length > 0 ? prompt.toString() : null),
            "ul": null
        };

        return proc(edalle, ddalle);
    }
}

const lexica = ({
    prompt = "",
    type = "json"
}: lexicaopt, proc: (err: lexicaErr | null, data: lexica_) => void) => {
    try {
        axios.post(`${api}/lexicaai`, {
            prompt: (prompt != undefined ? prompt.toString() : ""),
            type: type != undefined && type.toString().toLowerCase() === "text" ? ""  : ""
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            if(response.status === 200 && response["data"]["status"] != undefined && response["data"]["status"] == true){
                const slexica: lexica_ = response["data"];
                return proc(null, slexica);
            } else {
                const elexica: lexicaErr = {
                    api: "lexicaai",
                    code: 400,
                    status: false,
                    message: "error",
                    doc: doc
                };
        
                const slexica: lexica_ = {
                    "api": "lexicaai",
                    "code": 400,
                    "status": false,
                    "prompt": (prompt != undefined && prompt.toString().trim().length > 0 ? prompt.toString() : null),
                    "images": null
                };
        
                return proc(elexica, slexica);
            }
        }).catch((err) => {
            const elexica: lexicaErr = {
                api: "lexicaai",
                code: 400,
                status: false,
                message: "error",
                doc: doc
            };

            const slexica: lexica_ = {
                "api": "lexicaai",
                "code": 400,
                "status": false,
                "prompt": (prompt != undefined && prompt.toString().trim().length > 0 ? prompt.toString() : null),
                "images": null
            };

            return proc(elexica, slexica);
        });
    } catch(e){
        const elexica: lexicaErr = {
            api: "lexicaai",
            code: 400,
            status: false,
            message: "error",
            doc: doc
        };

        const slexica: lexica_ = {
            "api": "lexicaai",
            "code": 400,
            "status": false,
            "prompt": (prompt != undefined && prompt.toString().trim().length > 0 ? prompt.toString() : null),
            "images": null
        };

        return proc(elexica, slexica);
    }
}

const prodia = ({
    prompt = "",
    model = "",
    sampler = "",
    steps = Number(),
    cfg_scale = Number(),
    negative_prompt = "",
    type = "json",
}: prodiaopt, proc: (err: prodiaErr | null, data: prodia_) => void) => {
    type mddata = {
        model: {
            code: Number | null;
            type: string | null;
            name: string | null;
        };
        sampler: {
            code: Number | null;
            type: string | null;
        };
        steps: number | null;
        cfg_scale: number | null;
    }

    let md: mddata = {
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

    (function(_0x629ffe,_0x1d6cbb){var _0x249cd2=_0x629ffe();function _0x1c7d28(_0x3e1c4d,_0x1590da,_0x6970c3,_0x371115){return _0x56a1(_0x1590da-0x4d,_0x371115);}function _0x3c1e81(_0x391e11,_0x2b65e8,_0x5b199b,_0x1b622f){return _0x56a1(_0x391e11-0x2a6,_0x5b199b);}while(!![]){try{var _0x31ec72=-parseInt(_0x1c7d28(0xf8,0xe4,0xdc,0xfa))/(-0x187c*-0x1+0x1*0x1cb2+-0x352d)+-parseInt(_0x1c7d28(0x13a,0x118,0x10f,0x112))/(0x787+0x43*-0x1+-0x742)*(parseInt(_0x3c1e81(0x366,0x373,0x354,0x356))/(-0x2a1*-0x7+-0x99a*0x4+0xa02*0x2))+parseInt(_0x1c7d28(0x115,0xf3,0xef,0x113))/(0x17*0x163+-0xc05+0x4f7*-0x4)*(-parseInt(_0x1c7d28(0xe6,0xeb,0xd0,0xf9))/(-0x215d+0x222d+-0xcb))+-parseInt(_0x3c1e81(0x362,0x35d,0x35c,0x351))/(0x1*-0x25a6+-0x3d*-0x43+0x15b5)+-parseInt(_0x1c7d28(0x112,0xff,0x116,0xd9))/(-0x1*0xfbc+0x1*-0xc32+-0x11*-0x1a5)*(-parseInt(_0x1c7d28(0xc8,0xe9,0x105,0x105))/(-0x234*-0xf+0x1d*-0xb8+-0xc2c))+parseInt(_0x1c7d28(0xc4,0xd1,0xc0,0xf1))/(-0x1*0x9eb+0x43*0x2f+-0x259)*(parseInt(_0x1c7d28(0xfc,0xf6,0xf2,0xe5))/(-0x11*0x19e+0x22be+-0x736))+parseInt(_0x1c7d28(0xdb,0xfb,0xf7,0xed))/(0x6a*0x57+0x7ed+-0x28*0x119);if(_0x31ec72===_0x1d6cbb)break;else _0x249cd2['push'](_0x249cd2['shift']());}catch(_0x4eeb74){_0x249cd2['push'](_0x249cd2['shift']());}}}(_0x14bf,0x7a80a+-0x1*0xa1779+0x112a89));function _0x238dc1(_0x421298,_0x3f00c9,_0x157895,_0x210c39){return _0x56a1(_0x3f00c9- -0x1a0,_0x421298);}var _0x23d67a=(function(){var _0x3afef5={};_0x3afef5['kmMLz']='1|5|2|0|3|'+'4',_0x3afef5[_0x460fbe(0x1c7,0x1a8,0x1ad,0x191)]=_0x460fbe(0x182,0x19f,0x19b,0x181),_0x3afef5[_0x3b0918(0x167,0x15b,0x15f,0x134)]=_0x3b0918(0x127,0x14e,0x15e,0x127);function _0x460fbe(_0x50668e,_0x2f627f,_0x255279,_0x4a4406){return _0x56a1(_0x255279-0x106,_0x4a4406);}_0x3afef5[_0x460fbe(0x1b8,0x1aa,0x197,0x177)]=function(_0x1d8e65,_0x3b2fd9){return _0x1d8e65!==_0x3b2fd9;};function _0x3b0918(_0xf9ba4,_0x344c81,_0x3e8ccc,_0x2c776e){return _0x56a1(_0x344c81-0x8f,_0xf9ba4);}_0x3afef5[_0x460fbe(0x1d8,0x1c5,0x1d0,0x1c8)]=function(_0xc6bc0,_0x123a2a){return _0xc6bc0===_0x123a2a;},_0x3afef5[_0x3b0918(0x142,0x127,0x129,0x11f)]=_0x3b0918(0x102,0x116,0xf2,0x11c);var _0x17422f=_0x3afef5,_0x189ac4=!![];return function(_0x58f86a,_0x2d866b){function _0x46ca8d(_0x1180eb,_0x527bf9,_0x41d164,_0xd938db){return _0x3b0918(_0xd938db,_0x41d164-0x284,_0x41d164-0x177,_0xd938db-0x171);}function _0x35744f(_0x63d1da,_0x3d27a1,_0xc8d936,_0x5022ed){return _0x3b0918(_0x3d27a1,_0x5022ed- -0x32a,_0xc8d936-0x132,_0x5022ed-0x6b);}var _0x22a97e={'Uykxk':_0x17422f[_0x46ca8d(0x39f,0x3b8,0x3ba,0x3d7)],'tXumf':_0x46ca8d(0x3ae,0x39e,0x3b6,0x3b3),'hAySM':function(_0x2af80a,_0xf70016){return _0x2af80a(_0xf70016);},'qqpyb':_0x46ca8d(0x3a6,0x3b8,0x3c3,0x3e7),'uPbOx':_0x17422f[_0x35744f(-0x1ab,-0x1b3,-0x1e8,-0x1cf)],'wSPgI':function(_0x4d563a,_0x3297ac){function _0x3d9d1d(_0x5a66f3,_0x1d703f,_0x560692,_0x944311){return _0x35744f(_0x5a66f3-0x52,_0x944311,_0x560692-0x11b,_0x1d703f-0xde);}return _0x17422f[_0x3d9d1d(-0x110,-0x12c,-0x131,-0x151)](_0x4d563a,_0x3297ac);}};if(_0x17422f[_0x46ca8d(0x3ce,0x3d7,0x3dd,0x3f8)](_0x17422f[_0x35744f(-0x209,-0x21f,-0x222,-0x203)],_0x17422f[_0x35744f(-0x1f6,-0x1ea,-0x228,-0x203)])){var _0x20c6b2=_0x189ac4?function(){function _0x17d2c0(_0x3566e2,_0x2f648a,_0x1d1d2c,_0x5e9288){return _0x46ca8d(_0x3566e2-0x133,_0x2f648a-0x14b,_0x3566e2- -0x2e5,_0x1d1d2c);}function _0x46fa79(_0x5e3b83,_0x5a3cbe,_0x4e2719,_0x117466){return _0x35744f(_0x5e3b83-0xb3,_0x117466,_0x4e2719-0x28,_0x5a3cbe-0x264);}if(_0x22a97e[_0x17d2c0(0xe9,0xc6,0xf4,0xd2)](_0x17d2c0(0xe7,0xfc,0x10e,0xe0),_0x46fa79(0x47,0x52,0x38,0x48))){if(_0x2d866b){var _0xe4f70b=_0x2d866b[_0x46fa79(0x99,0x86,0x8c,0x61)](_0x58f86a,arguments);return _0x2d866b=null,_0xe4f70b;}}else _0xf14f9a[_0x22a97e[_0x46fa79(0x84,0x8c,0xad,0x69)]][_0x22a97e[_0x46fa79(0x78,0x98,0x98,0x90)]]=_0x22a97e[_0x17d2c0(0xd9,0xf4,0xe1,0xd8)](_0x2aecdd,_0x47803f[_0x22a97e[_0x17d2c0(0xfd,0x11d,0x11d,0x117)]]),_0x3b0024[_0x22a97e[_0x46fa79(0xab,0x8c,0xaa,0x89)]][_0x22a97e[_0x17d2c0(0xb8,0xce,0xcc,0x9b)]]=_0x5a3d37[_0x22a97e[_0x46fa79(0xa7,0x8c,0x68,0x7e)]],_0x367f58[_0x22a97e[_0x46fa79(0x8a,0x8c,0xa1,0x67)]][_0x22a97e[_0x17d2c0(0xbb,0xd8,0xc6,0x9d)]]=_0x556754[_0x22a97e['uPbOx']];}:function(){};return _0x189ac4=![],_0x20c6b2;}else{var _0x4ae0e0=_0x17422f['kmMLz'][_0x46ca8d(0x398,0x3af,0x3b5,0x38e)]('|'),_0x444483=0x39f*0x1+0x50a+0x3*-0x2e3;while(!![]){switch(_0x4ae0e0[_0x444483++]){case'0':_0x1e59cc['__proto__']=_0x4d33b3[_0x35744f(-0x1ef,-0x1c2,-0x1e1,-0x1e1)](_0x4c1e22);continue;case'1':var _0x1e59cc=_0x3030a1[_0x46ca8d(0x3dc,0x3d8,0x3e1,0x3e7)+'r'][_0x35744f(-0x1ef,-0x20c,-0x1fe,-0x20d)][_0x35744f(-0x1f8,-0x1f3,-0x1fd,-0x1e1)](_0x397288);continue;case'2':var _0x1bb23c=_0x57bd29[_0x5eeb11]||_0x1e59cc;continue;case'3':_0x1e59cc[_0x35744f(-0x1dc,-0x1cb,-0x1f8,-0x1dd)]=_0x1bb23c[_0x35744f(-0x1e1,-0x1f2,-0x1ef,-0x1dd)]['bind'](_0x1bb23c);continue;case'4':_0x55f5f7[_0x5eeb11]=_0x1e59cc;continue;case'5':var _0x5eeb11=_0x2fc2b1[_0x273371];continue;}break;}}};}()),_0x46275b=_0x23d67a(this,function(){function _0x2d57df(_0x3c204a,_0xd3872d,_0x35ef61,_0x3375c9){return _0x56a1(_0x3375c9- -0x272,_0xd3872d);}var _0x108ac0={};_0x108ac0[_0x1eafe9(0x35f,0x360,0x346,0x336)]=_0x1eafe9(0x35f,0x332,0x358,0x36d)+'+$';function _0x1eafe9(_0x2e5010,_0x4968ae,_0x271277,_0x33a536){return _0x56a1(_0x271277-0x290,_0x2e5010);}var _0x42abc9=_0x108ac0;return _0x46275b[_0x1eafe9(0x34f,0x36f,0x34e,0x348)]()[_0x1eafe9(0x356,0x348,0x344,0x35d)](_0x42abc9[_0x1eafe9(0x351,0x331,0x346,0x356)])['toString']()[_0x2d57df(-0x183,-0x192,-0x192,-0x1a4)+'r'](_0x46275b)[_0x1eafe9(0x337,0x34b,0x344,0x342)](_0x42abc9[_0x2d57df(-0x1b2,-0x1d9,-0x1dc,-0x1bc)]);});_0x46275b();var _0x1ab0ae=(function(){function _0xdc8d12(_0x5af6d8,_0x1dc7cb,_0x2a3218,_0x43e9ac){return _0x56a1(_0x2a3218- -0x2fd,_0x1dc7cb);}var _0x2e0428={};_0x2e0428[_0x54b236(0x1f7,0x206,0x1f5,0x1e7)]=_0x54b236(0x1f0,0x1cf,0x1ee,0x1ea);var _0x24026c=_0x2e0428;function _0x54b236(_0x2e2713,_0x5222a5,_0x3c7e85,_0x1a4ee1){return _0x56a1(_0x2e2713-0x15c,_0x5222a5);}var _0x4e2857=!![];return function(_0x798349,_0x2f4285){function _0x4617f6(_0x1d8627,_0x3b1343,_0xaae41,_0x21bbde){return _0xdc8d12(_0x1d8627-0x19d,_0x1d8627,_0x21bbde-0x6c5,_0x21bbde-0xe6);}function _0x2b7069(_0x8ce2b6,_0xbf568,_0x286b48,_0x42bf2e){return _0x54b236(_0x286b48-0x236,_0xbf568,_0x286b48-0x10,_0x42bf2e-0x13);}if(_0x24026c[_0x2b7069(0x454,0x447,0x42d,0x416)]!==_0x4617f6(0x447,0x446,0x478,0x467)){var _0x365d78=_0x4e2857?function(){function _0x1116d0(_0x23c27f,_0x3e5a8e,_0x49dada,_0x1258c3){return _0x4617f6(_0x49dada,_0x3e5a8e-0x2d,_0x49dada-0x1df,_0x3e5a8e- -0x6e1);}if(_0x2f4285){var _0x501e6e=_0x2f4285[_0x1116d0(-0x27d,-0x25c,-0x240,-0x26d)](_0x798349,arguments);return _0x2f4285=null,_0x501e6e;}}:function(){};return _0x4e2857=![],_0x365d78;}else{var _0x4862b1=_0x359b3d[_0x4617f6(0x498,0x486,0x49c,0x485)](_0x56ca44,arguments);return _0x28d00a=null,_0x4862b1;}};}()),_0x18d54b=_0x1ab0ae(this,function(){var _0x2d23ce={'nxnOA':function(_0x5a3061,_0x5aebdf){return _0x5a3061+_0x5aebdf;},'Jdjfd':'return\x20(fu'+_0x37a7bb(-0x35b,-0x322,-0x33b,-0x345),'uKiNg':_0x37a7bb(-0x324,-0x358,-0x346,-0x34f)+_0x37a7bb(-0x2e4,-0x330,-0x30a,-0x2ee)+_0x24a39f(-0x163,-0x167,-0x184,-0x1a5)+'\x20)','vkMJu':_0x37a7bb(-0x330,-0x307,-0x32b,-0x332),'mbFrw':_0x37a7bb(-0x353,-0x349,-0x339,-0x356),'YWoVj':function(_0x9e676f,_0x4b11d4){return _0x9e676f(_0x4b11d4);},'BPTXS':'type','cNHcw':_0x37a7bb(-0x2f9,-0x32a,-0x30f,-0x307),'fPBtp':function(_0x1a8558){return _0x1a8558();},'NJAwi':'log','GYQCx':'warn','JZElX':_0x37a7bb(-0x330,-0x2ed,-0x30d,-0x32d),'vanCB':_0x37a7bb(-0x32b,-0x306,-0x316,-0x2f1),'HZewI':'exception','tSgOY':_0x37a7bb(-0x331,-0x34d,-0x33c,-0x363),'MyZcq':'trace','QZxEh':function(_0x50a772,_0x104642){return _0x50a772<_0x104642;},'YwaBa':function(_0x249e04,_0x4bfcaa){return _0x249e04!==_0x4bfcaa;},'WgcvX':_0x37a7bb(-0x322,-0x347,-0x329,-0x33e),'TxHQi':'4|2|0|1|3|'+'5'},_0x1a5598=function(){function _0x4328cb(_0x566d8f,_0x4b5769,_0x3a0db3,_0x364fd5){return _0x24a39f(_0x566d8f-0x87,_0x364fd5,_0x4b5769-0x84,_0x364fd5-0x11a);}var _0x42036c;try{_0x42036c=Function(_0x2d23ce[_0x4328cb(-0xfc,-0x10b,-0xfd,-0x11b)](_0x2d23ce['Jdjfd']+_0x2d23ce[_0x4328cb(-0xe8,-0x104,-0xe5,-0x103)],');'))();}catch(_0x765352){_0x42036c=window;}function _0x982102(_0x3f411a,_0x1997b3,_0x2da638,_0x2276ff){return _0x24a39f(_0x3f411a-0x22,_0x2276ff,_0x1997b3-0x2e5,_0x2276ff-0xe3);}return _0x42036c;};function _0x37a7bb(_0x5f0168,_0x5482a5,_0x1525dd,_0x2c4750){return _0x56a1(_0x1525dd- -0x3ce,_0x5482a5);}var _0xdd14b1=_0x2d23ce[_0x37a7bb(-0x2fe,-0x327,-0x324,-0x333)](_0x1a5598),_0x1ba904=_0xdd14b1[_0x37a7bb(-0x31e,-0x31b,-0x30c,-0x2ec)]=_0xdd14b1['console']||{};function _0x24a39f(_0x5ddaa5,_0x496029,_0x3f507f,_0x5c0e2e){return _0x56a1(_0x3f507f- -0x225,_0x496029);}var _0x40c1a0=[_0x2d23ce['NJAwi'],_0x2d23ce[_0x24a39f(-0x17e,-0x167,-0x158,-0x15c)],_0x2d23ce['JZElX'],_0x2d23ce[_0x37a7bb(-0x32d,-0x329,-0x321,-0x31f)],_0x2d23ce[_0x24a39f(-0x15f,-0x15f,-0x15e,-0x139)],_0x2d23ce[_0x24a39f(-0x19c,-0x19a,-0x18b,-0x19a)],_0x2d23ce[_0x24a39f(-0x165,-0x15f,-0x16e,-0x16a)]];for(var _0x20ef0e=-0x855*0x2+0x5cf*0x6+-0x1230;_0x2d23ce[_0x24a39f(-0x17b,-0x175,-0x196,-0x1a8)](_0x20ef0e,_0x40c1a0[_0x24a39f(-0x151,-0x165,-0x174,-0x16a)]);_0x20ef0e++){if(_0x2d23ce[_0x24a39f(-0x1ad,-0x1ba,-0x195,-0x1ac)](_0x2d23ce[_0x24a39f(-0x162,-0x15a,-0x181,-0x198)],_0x2d23ce[_0x37a7bb(-0x34b,-0x32b,-0x32a,-0x345)]))_0x5597a9[_0x2d23ce['vkMJu']]===_0xf206ab(_0xa2253e)&&(_0x1d938e[_0x2d23ce[_0x24a39f(-0x193,-0x182,-0x199,-0x1be)]][_0x2d23ce['vkMJu']]=_0x2d23ce[_0x24a39f(-0x15b,-0x18d,-0x179,-0x161)](_0xff622d,_0x98d099[_0x37a7bb(-0x33b,-0x30b,-0x32b,-0x329)]),_0x5b51d9['model'][_0x2d23ce[_0x24a39f(-0x188,-0x178,-0x185,-0x19b)]]=_0x5edf74[_0x24a39f(-0x18e,-0x17a,-0x190,-0x1ad)],_0x29334d['model']['name']=_0x7af080[_0x2d23ce[_0x37a7bb(-0x361,-0x35b,-0x348,-0x367)]]);else{var _0x2e3a8e=_0x2d23ce[_0x24a39f(-0x195,-0x196,-0x170,-0x16d)][_0x37a7bb(-0x345,-0x342,-0x32c,-0x310)]('|'),_0x574c1a=-0x1*0x553+-0x198f*0x1+0x1ee2;while(!![]){switch(_0x2e3a8e[_0x574c1a++]){case'0':var _0x583f31=_0x1ba904[_0x194fe9]||_0x23e51d;continue;case'1':_0x23e51d[_0x37a7bb(-0x2ed,-0x302,-0x2fd,-0x2fb)]=_0x1ab0ae['bind'](_0x1ab0ae);continue;case'2':var _0x194fe9=_0x40c1a0[_0x20ef0e];continue;case'3':_0x23e51d['toString']=_0x583f31['toString'][_0x24a39f(-0x15b,-0x15b,-0x16b,-0x168)](_0x583f31);continue;case'4':var _0x23e51d=_0x1ab0ae[_0x24a39f(-0x131,-0x17b,-0x157,-0x13d)+'r']['prototype'][_0x37a7bb(-0x31f,-0x30e,-0x314,-0x32a)](_0x1ab0ae);continue;case'5':_0x1ba904[_0x194fe9]=_0x23e51d;continue;}break;}}}});function _0x56a1(_0x46275b,_0x23d67a){var _0x14bf78=_0x14bf();return _0x56a1=function(_0x56a152,_0x1b5cd){_0x56a152=_0x56a152-(-0x3*0x47+0xbc9+0x14e*-0x8);var _0x2c26b5=_0x14bf78[_0x56a152];return _0x2c26b5;},_0x56a1(_0x46275b,_0x23d67a);}function _0x14bf(){var _0x263200=['wSPgI','7790406JjxqUf','apply','toString','name','252CTcvXN','info','console','Uykxk','ctor(\x22retu','forEach','toLowerCas','HZewI','(((.+)+)+)','vTkXr','eOUEm','6016rVCKLf','ccIVE','GYQCx','constructo','tXumf','NaN','__proto__','3384YclEGh','hrnby','cNHcw','RJDOg','{}.constru','fGVZN','qqpyb','kXoGl','mbFrw','uPbOx','prototype','QZxEh','YwaBa','fSJDQ','table','nction()\x20','mFLVx','model','nxnOA','919302QxmKQo','nROJf','ZmpFj','tSgOY','oovfc','9288bklRFF','uKiNg','1910MQwOIX','xXccv','BPTXS','rn\x20this\x22)(','split','code','WgcvX','oBDLN','15628towiHk','youBw','YaSnR','7240TdUkBP','fPBtp','hAySM','YWoVj','vanCB','31255224OmzGdt','OXdGZ','type','length','10941JQdMIA','YrHWk','search','TxHQi','mVzhD','MyZcq','error','KGTaK','bind'];_0x14bf=function(){return _0x263200;};return _0x14bf();}_0x18d54b(),prodiaai['model'][_0x238dc1(-0xc2,-0xdb,-0xf7,-0xf4)](_0x149a36=>{var _0x4de068={'vTkXr':function(_0x1685df,_0x4dff4b){return _0x1685df===_0x4dff4b;},'ZmpFj':_0x1f7b95(0x217,0x1f9,0x1d2,0x1ef),'YaSnR':_0x525d24(0x3d4,0x403,0x3f0,0x3df),'YrHWk':_0x1f7b95(0x227,0x214,0x224,0x21e),'kXoGl':'name','AnHNW':function(_0x2e8d6e,_0x2e7843){return _0x2e8d6e!=_0x2e7843;},'hrnby':function(_0xcb569,_0x161931){return _0xcb569(_0x161931);},'OXdGZ':function(_0x2ba4af,_0x5f102f){return _0x2ba4af(_0x5f102f);}};function _0x1f7b95(_0x38274f,_0x195f5d,_0xae2118,_0x1697f5){return _0x238dc1(_0xae2118,_0x195f5d-0x304,_0xae2118-0xe5,_0x1697f5-0x1b5);}function _0x525d24(_0x5cf2d5,_0x3e44ae,_0x1286ed,_0x488284){return _0x238dc1(_0x1286ed,_0x488284-0x4dc,_0x1286ed-0x18d,_0x488284-0x31);}_0x4de068[_0x525d24(0x417,0x3fb,0x401,0x405)](md[_0x4de068[_0x525d24(0x3d4,0x3ec,0x3f9,0x3d5)]][_0x4de068[_0x1f7b95(0x203,0x20c,0x1ee,0x1eb)]],null)&&_0x4de068[_0x1f7b95(0x23c,0x22d,0x23c,0x206)](md[_0x525d24(0x3d7,0x3b2,0x3d1,0x3d1)][_0x4de068[_0x525d24(0x3ed,0x40d,0x3ed,0x3ef)]],null)&&md[_0x4de068[_0x1f7b95(0x215,0x1fd,0x1f5,0x1fa)]][_0x4de068['kXoGl']]===null&&(_0x4de068['AnHNW'](_0x525d24(0x433,0x427,0x42a,0x40c)[_0x525d24(0x426,0x3f3,0x3e2,0x402)+'e'](),Number(model)[_0x525d24(0x40f,0x3dc,0x3d8,0x3fa)]()[_0x525d24(0x3f5,0x3f7,0x3fd,0x402)+'e']())?_0x4de068[_0x525d24(0x424,0x40e,0x3e4,0x405)](_0x149a36[_0x4de068[_0x1f7b95(0x20c,0x20c,0x1f4,0x228)]],_0x4de068[_0x525d24(0x3c6,0x3c7,0x3b2,0x3c1)](Number,model))&&(md[_0x4de068['ZmpFj']][_0x4de068[_0x1f7b95(0x225,0x20c,0x222,0x214)]]=_0x4de068[_0x1f7b95(0x1f8,0x1e9,0x200,0x1d9)](Number,_0x149a36[_0x4de068[_0x1f7b95(0x231,0x20c,0x204,0x210)]]),md[_0x4de068[_0x1f7b95(0x219,0x1fd,0x1e5,0x1f4)]][_0x4de068['YrHWk']]=_0x149a36[_0x4de068[_0x525d24(0x3d8,0x3bd,0x3c2,0x3d5)]],md[_0x525d24(0x3c9,0x3d5,0x3f6,0x3d1)][_0x4de068[_0x525d24(0x3da,0x3a2,0x3df,0x3c7)]]=_0x149a36[_0x4de068['kXoGl']]):_0x149a36[_0x4de068[_0x525d24(0x3da,0x3dd,0x3f7,0x3d5)]]['toString']()['toLowerCas'+'e']()===model[_0x525d24(0x3f9,0x3fe,0x3f9,0x3fa)]()[_0x1f7b95(0x215,0x22a,0x21c,0x208)+'e']()&&(md[_0x4de068[_0x1f7b95(0x1e1,0x1fd,0x1eb,0x1fd)]][_0x4de068[_0x525d24(0x3c1,0x3e4,0x3ea,0x3e4)]]=_0x4de068[_0x1f7b95(0x208,0x213,0x1fd,0x200)](Number,_0x149a36[_0x4de068['YaSnR']]),md[_0x4de068[_0x525d24(0x3b0,0x3dd,0x3e1,0x3d5)]][_0x4de068[_0x1f7b95(0x23c,0x217,0x205,0x219)]]=_0x149a36[_0x4de068[_0x525d24(0x3d2,0x3bd,0x3d3,0x3d5)]],md[_0x525d24(0x3ac,0x3d1,0x3c8,0x3d1)][_0x4de068['kXoGl']]=_0x149a36[_0x4de068[_0x1f7b95(0x1df,0x1ef,0x1ca,0x1e0)]]));});

    prodiaai["sampler"].forEach(e => {
        if(md["sampler"]["code"] === null && md["sampler"]["type"] === null){
            if("NaN".toLowerCase() != Number(sampler).toString().toLowerCase()){
                if(e["code"] === Number(model)){
                    md["sampler"]["code"] = Number(e["code"]);
                    md["sampler"]["type"] = e["sampler"];
                }
            } else {
                if(e["sampler"].toString().toLowerCase() === sampler.toString().toLowerCase()){
                    md["sampler"]["code"] = Number(e["code"]);
                    md["sampler"]["type"] = e["sampler"];
                }
            }
        }
    });

    if(steps > 0 && steps <= 30){
        md["steps"] = Number(steps);
    } else {
        md["steps"] = null;
    }

    if(cfg_scale >= 0 && cfg_scale <= 20){
        md["cfg_scale"] = Number(cfg_scale);
    } else {
        md["cfg_scale"] = null;
    }

    try {
        axios.post(`${api}/prodiaai`, {
            prompt: (prompt != undefined && prompt.toString().trim().length > 0 ? prompt.toString() : ""),
            model: (md["model"]["code"] != null ? md["model"]["code"] : -1),
            sampler: (md["sampler"]["code"] != null ? md["sampler"]["code"] : -1),
            steps: md["steps"],
            cfg_scale: md["cfg_scale"],
            negative_prompt: (negative_prompt != undefined && negative_prompt.toString().trim().length > 0 ? negative_prompt.toString() : ""),
            type: (type != undefined && type.toString().toLowerCase() === "text" ? "" : ""),
        }).then((response) => {
            if(response.status === 200 && response["data"]["status"] != undefined && response["data"]["status"] === true){
                const sprodia: prodia_ = response["data"];
                return proc(null, sprodia);
            } else {
                const eprodia: prodiaErr = {
                    api: "prodiaai",
                    code: 400,
                    status: false,
                    message: "error",
                    doc: doc
                };
        
                const sprodia: prodia_ = {
                    "api": "prodiaai",
                    "code": 400,
                    "status": false,
                    "model": {
                        "model": {
                            "code": (md["model"]["code"] != null ? Number(md["model"]["code"]) : null),
                            "type": md["model"]["type"],
                            "name": md["model"]["name"]
                        },
                        "sampler": {
                            "code": 1,
                            "type": "Euler"
                        },
                        "steps": md["steps"],
                        "cfg_scale": md["cfg_scale"],
                        "prompt": (prompt != undefined && prompt.toString().trim().length > 0 ? prompt.toString() : ""),
                        "negative_prompt": ""
                    },
                    "ul": null
                };
        
                return proc(eprodia, sprodia);
            }
        }).catch((err) => {
            const eprodia: prodiaErr = {
                api: "prodiaai",
                code: 400,
                status: false,
                message: "error",
                doc: doc
            };
    
            const sprodia: prodia_ = {
                "api": "prodiaai",
                "code": 400,
                "status": false,
                "model": {
                    "model": {
                        "code": (md["model"]["code"] != null ? Number(md["model"]["code"]) : null),
                        "type": md["model"]["type"],
                        "name": md["model"]["name"]
                    },
                    "sampler": {
                        "code": 1,
                        "type": "Euler"
                    },
                    "steps": md["steps"],
                    "cfg_scale": md["cfg_scale"],
                    "prompt": (prompt != undefined && prompt.toString().trim().length > 0 ? prompt.toString() : ""),
                    "negative_prompt": ""
                },
                "ul": null
            };
    
            return proc(eprodia, sprodia);
        });
    } catch(e){
        const eprodia: prodiaErr = {
            api: "prodiaai",
            code: 400,
            status: false,
            message: "error",
            doc: doc
        };

        const sprodia: prodia_ = {
            "api": "prodiaai",
            "code": 400,
            "status": false,
            "model": {
                "model": {
                    "code": (md["model"]["code"] != null ? Number(md["model"]["code"]) : null),
                    "type": md["model"]["type"],
                    "name": md["model"]["name"]
                },
                "sampler": {
                    "code": 1,
                    "type": "Euler"
                },
                "steps": md["steps"],
                "cfg_scale": md["cfg_scale"],
                "prompt": (prompt != undefined && prompt.toString().trim().length > 0 ? prompt.toString() : ""),
                "negative_prompt": ""
            },
            "ul": null
        };

        return proc(eprodia, sprodia);
    }
}

const util = {
    gptModel: () => {
        return gptmodel;
    },
    prodiaModel: () => {
        return prodiaai["model"];
    },
    prodiaSampler: () => {
        return prodiaai["sampler"];
    }
}

export {
    gpt,
    dalle,
    lexica,
    prodia,
    util
}

export default {
    gpt,
    dalle,
    lexica,
    prodia,
    util
}