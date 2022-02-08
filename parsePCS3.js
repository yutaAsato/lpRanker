const path = require('path');
const fs = require('fs');
const { exit } = require('process');

const puppeteer = require('puppeteer');

var str = '';
var strLP1 = '';
var strLP2 = '';
var strAPR = '';
var lpCnt;

var aprList = [];
var lpList = [];

async function getPageHTML(){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://www.pancakeswap.finance/farms", {waitUntil: 'networkidle2'});
    
    await page.click ;

    const buff = await page.content();
    //console.log(buff);

    await browser.close();

    return buff;
}

function checkAllUpperC(inputStr){
	console.log(inputStr);
    
	for (let i = 0; i < inputStr.length ; i++) {
		var byte = inputStr.charCodeAt(i);
        console.log(byte);
        if(byte < 0x41 || byte > 0x5a){
            return(1);
            break;
        };
    }
    return(0);
}

function extractLP1(midPos){

    searchStr = str.slice(midPos - 10,midPos);
    var thisPos = searchStr.search('>');

    var LP1 = searchStr.slice(thisPos + 1,midPos);
    return(LP1);

}

function extractLP2(midPos){

    searchStr = str.slice(midPos + 1,midPos + 10);
    var thisPos = searchStr.search('<');

    var LP2 = searchStr;
    LP2 = LP2.slice(0, thisPos);  
    return(LP2);
} 

function findLP(){

    var thisPos = str.search('-');
    var lp1 = str.slice(thisPos - 3,thisPos);
    var lp2 = str.slice(thisPos + 1,thisPos + 4);
    console.log(lp1);
    console.log(lp2);
    if(!checkAllUpperC(lp1) && !checkAllUpperC(lp2)){
        console.log('ok');
        strLP1 = extractLP1(thisPos);
        strLP2 = extractLP2(thisPos);
        str = str.slice(thisPos + 2);
        return(0);
    }
    else{
        str = str.slice(thisPos + 2);
        return(1);
    };
}

function checkIsDecimalVal(inputStr){
	console.log(inputStr);
    
	for (let i = 0; i < inputStr.length ; i++) {
		var byte = inputStr.charCodeAt(i);
        console.log(byte);
        if(byte != 0x2e){
            if(byte < 0x30 || byte > 0x39){
                return(1);
                break;
            };
        };
    }
    return(0);
}

function findAPR(){

    var thisPos = str.search('%');
    console.log(thisPos);
    searchStr = str.slice(thisPos - 8,thisPos);
    console.log(searchStr);
    var startPos = searchStr.search('>');

    var apr = searchStr.slice(startPos + 1,thisPos);
    //console.log(apr);


    if(!checkIsDecimalVal(apr)){
        console.log('ok');
        strAPR = apr;
        str = str.slice(thisPos + 2);
        return(0);
    }
    else{
        str = str.slice(thisPos + 2);
        return(1);
    };

}

function getListFromPage(){

    do {
        resultLP = findLP();
        console.log(resultLP);
    } while (resultLP == 1);
    
    console.log(strLP1);
    console.log(strLP2);
    
    do {
        resultAPR = findAPR();
        console.log(resultAPR);
    } while (resultAPR == 1);
    
    console.log(strAPR);
    
    lpList[lpCnt] = strLP1.concat(strLP2);
    aprList[lpCnt] = strAPR;

    lpCnt++;
    return(0);

}

//var pathObj = path.parse(__filename);
//console.log(pathObj);

//synchronous read
//const file = fs.readdirSync('./')
//console.log(file);

//const buff = fs.readFileSync('./pdf/Farms _ PancakeSwap - $12.010.html');
//console.log(buff.toLocaleString());

async function main(){
    const buff = await getPageHTML();

    str = buff.toString();

    var pos = str.search('APR');
    console.log(pos);
    str = str.slice(pos);
    console.log(str.slice(0,3));

    lpCnt = 0;

    do {
        result = getListFromPage();
        console.log(lpCnt);
    if(lpCnt > 100){
        
        break;
    }

    } while (str.length > 100);

    console.log(lpList);
    console.log(aprList);
};

main();


//var result = checkIsDecimalVal('0.a');
//console.log(result);

//async readdirSync
fs.readdir('./', function(err, files){
		if (err) console.log('Error', err);
		//else console.log('Result', files);
});