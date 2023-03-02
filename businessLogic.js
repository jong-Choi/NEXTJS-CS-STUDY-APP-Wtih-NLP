const originalText = `
CSR에선 브라우저가 서버에 HTML과 JS 파일을 요청한 후 로드되면 사용자의 상호작용에 따라 JS를 이용해서 동적으로 렌더링을 시킨다.

👍 장점
첫 로딩만 기다리면, 동적으로 빠르게 렌더링이 되기 때문에 사용자 경험(UX)이 좋다.
서버에게 요청하는 횟수가 훨씬 적기 때문에 서버의 부담이 덜하다.
👎 단점
모든 스크립트 파일이 로드될 때까지 기다려야 한다.
리소스를 청크(Chunk) 단위로 묶어서 요청할 때만 다운받게 하는 방식으로 완화시킬 수 있지만 완벽히 해결할 수는 없다.
검색엔진의 검색 봇이 크롤링을 하는데 어려움을 겪기 때문에 검색엔진 최적화(Search Engine Optimization)의 문제가 있다.
구글 봇의 경우는 JS를 지원하지만, 다른 검색엔진의 경우 그렇지 않기 때문에 문제가 된다.
`;
const data = `
[{"id":0,"text":"CSR에선 브라우저가 서버에 HTML과 JS 파일을 요청한 후 로드되면 사용자의 상호작용에 따라 JS를 이용해서 동적으로 렌더링을 시킨다.","morp":[{"id":0,"lemma":"CSR","type":"SL","position":0,"weight":1},{"id":1,"lemma":"에서","type":"JKB","position":3,"weight":0.0968674},{"id":2,"lemma":"ㄴ","type":"JX","position":6,"weight":0.0670301},{"id":3,"lemma":"브라우저","type":"NNG","position":10,"weight":0.041357},{"id":4,"lemma":"가","type":"JKS","position":22,"weight":0.0556725},{"id":5,"lemma":"서버","type":"NNG","position":26,"weight":0.0685511},{"id":6,"lemma":"에","type":"JKB","position":32,"weight":0.098082},{"id":7,"lemma":"HTML","type":"SL","position":36,"weight":1},{"id":8,"lemma":"과","type":"JC","position":40,"weight":0.0840099},{"id":9,"lemma":"JS","type":"SL","position":44,"weight":1},{"id":10,"lemma":"파일","type":"NNG","position":47,"weight":0.159726},{"id":11,"lemma":"을","type":"JKO","position":53,"weight":0.126717},{"id":12,"lemma":"요청","type":"NNG","position":57,"weight":0.0981197},{"id":13,"lemma":"하","type":"XSV","position":63,"weight":0.0253395},{"id":14,"lemma":"ㄴ","type":"ETM","position":63,"weight":0.0253395},{"id":15,"lemma":"후","type":"NNG","position":67,"weight":0.185576},{"id":16,"lemma":"로드","type":"NNG","position":71,"weight":0.0183371},{"id":17,"lemma":"되","type":"XSV","position":77,"weight":0.0530855},{"id":18,"lemma":"면","type":"EC","position":80,"weight":0.116693},{"id":19,"lemma":"사용","type":"NNG","position":84,"weight":0.20425},{"id":20,"lemma":"자","type":"XSN","position":90,"weight":0.20425},{"id":21,"lemma":"의","type":"JKG","position":93,"weight":0.231463},{"id":22,"lemma":"상호","type":"NNG","position":97,"weight":0.17321},{"id":23,"lemma":"작용","type":"NNG","position":103,"weight":0.125879},{"id":24,"lemma":"에","type":"JKB","position":109,"weight":0.14179},{"id":25,"lemma":"따르","type":"VV","position":113,"weight":0.162195},{"id":26,"lemma":"어","type":"EC","position":116,"weight":0.0989433},{"id":27,"lemma":"JS","type":"SL","position":120,"weight":1},{"id":28,"lemma":"를","type":"JKO","position":122,"weight":0.152986},{"id":29,"lemma":"이용","type":"NNG","position":126,"weight":0.055705},{"id":30,"lemma":"하","type":"XSV","position":132,"weight":0.055705},{"id":31,"lemma":"어서","type":"EC","position":132,"weight":0.117474},{"id":32,"lemma":"동","type":"NNG","position":139,"weight":0.0664803},{"id":33,"lemma":"적","type":"XSN","position":142,"weight":0.0664803},{"id":34,"lemma":"으로","type":"JKB","position":145,"weight":0.0942413},{"id":35,"lemma":"렌더링","type":"NNG","position":152,"weight":0.0392721},{"id":36,"lemma":"을","type":"JKO","position":161,"weight":0.0973796},{"id":37,"lemma":"시키","type":"VV","position":165,"weight":0.0426953},{"id":38,"lemma":"ㄴ다","type":"EF","position":168,"weight":0.089028},{"id":39,"lemma":".","type":"SF","position":174,"weight":1}]},{"id":1,"text":"👍 장점","morp":[{"id":0,"lemma":"👍","type":"SW","position":175,"weight":1},{"id":1,"lemma":"장점","type":"NNG","position":180,"weight":0.0646733}]},{"id":2,"text":"첫 로딩만 기다리면, 동적으로 빠르게 렌더링이 되기 때문에 사용자 경험(UX)이 좋다.","morp":[{"id":0,"lemma":"첫","type":"MM","position":186,"weight":0.0662897},{"id":1,"lemma":"로딩","type":"NNG","position":190,"weight":0.03585},{"id":2,"lemma":"만","type":"JX","position":196,"weight":0.0735024},{"id":3,"lemma":"기다리","type":"VV","position":200,"weight":0.0900591},{"id":4,"lemma":"면","type":"EC","position":209,"weight":0.0848049},{"id":5,"lemma":",","type":"SP","position":212,"weight":1},{"id":6,"lemma":"동","type":"NNG","position":214,"weight":0.0736998},{"id":7,"lemma":"적","type":"XSN","position":217,"weight":0.0736998},{"id":8,"lemma":"으로","type":"JKB","position":220,"weight":0.0972543},{"id":9,"lemma":"빠르","type":"VA","position":227,"weight":0.107702},{"id":10,"lemma":"게","type":"EC","position":233,"weight":0.0919639},{"id":11,"lemma":"렌더링","type":"NNG","position":237,"weight":0.0513792},{"id":12,"lemma":"이","type":"JKC","position":246,"weight":0.0871024},{"id":13,"lemma":"되","type":"VV","position":250,"weight":0.174149},{"id":14,"lemma":"기","type":"ETN","position":253,"weight":0.284161},{"id":15,"lemma":"때문","type":"NNB","position":257,"weight":0.156463},{"id":16,"lemma":"에","type":"JKB","position":263,"weight":0.131583},{"id":17,"lemma":"사용","type":"NNG","position":267,"weight":0.149368},{"id":18,"lemma":"자","type":"XSN","position":273,"weight":0.149368},{"id":19,"lemma":"경험","type":"NNG","position":277,"weight":0.140375},{"id":20,"lemma":"(","type":"SS","position":283,"weight":1},{"id":21,"lemma":"UX","type":"SL","position":284,"weight":1},{"id":22,"lemma":")","type":"SS","position":286,"weight":1},{"id":23,"lemma":"이","type":"JKS","position":287,"weight":0.0939299},{"id":24,"lemma":"좋","type":"VA","position":291,"weight":0.211694},{"id":25,"lemma":"다","type":"EF","position":294,"weight":0.142123},{"id":26,"lemma":".","type":"SF","position":297,"weight":1}]},{"id":3,"text":"서버에게 요청하는 횟수가 훨씬 적기 때문에 서버의 부담이 덜하다.","morp":[{"id":0,"lemma":"서버","type":"NNG","position":298,"weight":0.0330969},{"id":1,"lemma":"에게","type":"JKB","position":304,"weight":0.0688124},{"id":2,"lemma":"요청","type":"NNG","position":311,"weight":0.0330631},{"id":3,"lemma":"하","type":"XSV","position":317,"weight":0.0330631},{"id":4,"lemma":"는","type":"ETM","position":320,"weight":0.15192},{"id":5,"lemma":"횟수","type":"NNG","position":324,"weight":0.0991044},{"id":6,"lemma":"가","type":"JKS","position":330,"weight":0.146276},{"id":7,"lemma":"훨씬","type":"MAG","position":334,"weight":0.0669449},{"id":8,"lemma":"적","type":"VA","position":341,"weight":0.0947861},{"id":9,"lemma":"기","type":"ETN","position":344,"weight":0.213592},{"id":10,"lemma":"때문","type":"NNB","position":348,"weight":0.160002},{"id":11,"lemma":"에","type":"JKB","position":354,"weight":0.126823},{"id":12,"lemma":"서버","type":"NNG","position":358,"weight":0.0713685},{"id":13,"lemma":"의","type":"JKG","position":364,"weight":0.12483},{"id":14,"lemma":"부담","type":"NNG","position":368,"weight":0.210618},{"id":15,"lemma":"이","type":"JKS","position":374,"weight":0.06156},{"id":16,"lemma":"덜","type":"MAG","position":378,"weight":0.0221223},{"id":17,"lemma":"하","type":"XSA","position":381,"weight":0.0221223},{"id":18,"lemma":"다","type":"EF","position":384,"weight":0.176996},{"id":19,"lemma":".","type":"SF","position":387,"weight":1}]},{"id":4,"text":"👎 단점","morp":[{"id":0,"lemma":"👎","type":"SW","position":388,"weight":1},{"id":1,"lemma":"단점","type":"NNG","position":393,"weight":0.0673159}]},{"id":5,"text":"모든 스크립트 파일이 로드될 때까지 기다려야 한다.","morp":[{"id":0,"lemma":"모든","type":"MM","position":399,"weight":0.065548},{"id":1,"lemma":"스크립트","type":"NNG","position":406,"weight":0.0348177},{"id":2,"lemma":"파일","type":"NNG","position":419,"weight":0.119829},{"id":3,"lemma":"이","type":"JKS","position":425,"weight":0.0636392},{"id":4,"lemma":"로드","type":"NNG","position":429,"weight":0.0276665},{"id":5,"lemma":"되","type":"XSV","position":435,"weight":0.0276665},{"id":6,"lemma":"ㄹ","type":"ETM","position":435,"weight":0.0499254},{"id":7,"lemma":"때","type":"NNG","position":439,"weight":0.182144},{"id":8,"lemma":"까지","type":"JX","position":442,"weight":0.102524},{"id":9,"lemma":"기다리","type":"VV","position":449,"weight":0.0736328},{"id":10,"lemma":"어야","type":"EC","position":455,"weight":0.114581},{"id":11,"lemma":"하","type":"VX","position":462,"weight":0.0929374},{"id":12,"lemma":"ㄴ다","type":"EF","position":462,"weight":0.132662},{"id":13,"lemma":".","type":"SF","position":468,"weight":1}]},{"id":6,"text":"리소스를 청크(Chunk) 단위로 묶어서 요청할 때만 다운받게 하는 방식으로 완화시킬 수 있지만 완벽히 해결할 수는 없다.","morp":[{"id":0,"lemma":"리소스","type":"NNP","position":469,"weight":0.031443},{"id":1,"lemma":"를","type":"JKO","position":478,"weight":0.116072},{"id":2,"lemma":"청크","type":"NNG","position":482,"weight":0.0435583},{"id":3,"lemma":"(","type":"SS","position":488,"weight":1},{"id":4,"lemma":"Chunk","type":"SL","position":489,"weight":1},{"id":5,"lemma":")","type":"SS","position":494,"weight":1},{"id":6,"lemma":"단위","type":"NNG","position":496,"weight":0.19353},{"id":7,"lemma":"로","type":"JKB","position":502,"weight":0.278085},{"id":8,"lemma":"묶","type":"VV","position":506,"weight":0.131467},{"id":9,"lemma":"어서","type":"EC","position":509,"weight":0.0807931},{"id":10,"lemma":"요청","type":"NNG","position":516,"weight":0.0590188},{"id":11,"lemma":"하","type":"XSV","position":522,"weight":0.0270462},{"id":12,"lemma":"ㄹ","type":"ETM","position":522,"weight":0.0270462},{"id":13,"lemma":"때","type":"NNG","position":526,"weight":0.191517},{"id":14,"lemma":"만","type":"JX","position":529,"weight":0.102883},{"id":15,"lemma":"다운","type":"NNG","position":533,"weight":0.0983084},{"id":16,"lemma":"받","type":"VV","position":539,"weight":0.0227142},{"id":17,"lemma":"게","type":"EC","position":542,"weight":0.0887315},{"id":18,"lemma":"하","type":"VX","position":546,"weight":0.0791736},{"id":19,"lemma":"는","type":"ETM","position":549,"weight":0.175949},{"id":20,"lemma":"방식","type":"NNG","position":553,"weight":0.153052},{"id":21,"lemma":"으로","type":"JKB","position":559,"weight":0.0956947},{"id":22,"lemma":"완화","type":"NNG","position":566,"weight":0.100172},{"id":23,"lemma":"시키","type":"XSV","position":572,"weight":0.0741668},{"id":24,"lemma":"ㄹ","type":"ETM","position":575,"weight":0.0531705},{"id":25,"lemma":"수","type":"NNB","position":579,"weight":0.233278},{"id":26,"lemma":"있","type":"VA","position":583,"weight":0.0901423},{"id":27,"lemma":"지만","type":"EC","position":586,"weight":0.0813963},{"id":28,"lemma":"완벽히","type":"MAG","position":593,"weight":0.0711127},{"id":29,"lemma":"해결","type":"NNG","position":603,"weight":0.0332903},{"id":30,"lemma":"하","type":"XSV","position":609,"weight":0.0332903},{"id":31,"lemma":"ㄹ","type":"ETM","position":609,"weight":0.0326544},{"id":32,"lemma":"수","type":"NNB","position":613,"weight":0.167608},{"id":33,"lemma":"는","type":"JX","position":616,"weight":0.319872},{"id":34,"lemma":"없","type":"VA","position":620,"weight":0.187675},{"id":35,"lemma":"다","type":"EF","position":623,"weight":0.149167},{"id":36,"lemma":".","type":"SF","position":626,"weight":1}]},{"id":7,"text":"검색엔진의 검색 봇이 크롤링을 하는데 어려움을 겪기 때문에 검색엔진 최적화(Search Engine Optimization)의 문제가 있다.","morp":[{"id":0,"lemma":"검색","type":"NNG","position":627,"weight":0.10332},{"id":1,"lemma":"엔진","type":"NNG","position":633,"weight":0.0546518},{"id":2,"lemma":"의","type":"JKG","position":639,"weight":0.178205},{"id":3,"lemma":"검색","type":"NNG","position":643,"weight":0.163691},{"id":4,"lemma":"봇","type":"NNG","position":650,"weight":0.0839297},{"id":5,"lemma":"이","type":"JKS","position":653,"weight":0.0643547},{"id":6,"lemma":"크롤","type":"NNG","position":657,"weight":0.0270384},{"id":7,"lemma":"링","type":"NNG","position":663,"weight":0.0270384},{"id":8,"lemma":"을","type":"JKO","position":666,"weight":0.115508},{"id":9,"lemma":"하","type":"VV","position":670,"weight":0.0702523},{"id":10,"lemma":"는데","type":"EC","position":673,"weight":0.0787982},{"id":11,"lemma":"어려움","type":"NNG","position":680,"weight":0.0882559},{"id":12,"lemma":"을","type":"JKO","position":689,"weight":0.12451},{"id":13,"lemma":"겪","type":"VV","position":693,"weight":0.08975},{"id":14,"lemma":"기","type":"ETN","position":696,"weight":0.16402},{"id":15,"lemma":"때문","type":"NNB","position":700,"weight":0.15849},{"id":16,"lemma":"에","type":"JKB","position":706,"weight":0.123684},{"id":17,"lemma":"검색","type":"NNG","position":710,"weight":0.158066},{"id":18,"lemma":"엔진","type":"NNG","position":716,"weight":0.0251246},{"id":19,"lemma":"최적","type":"NNG","position":723,"weight":0.101541},{"id":20,"lemma":"화","type":"XSN","position":729,"weight":0.104872},{"id":21,"lemma":"(","type":"SS","position":732,"weight":1},{"id":22,"lemma":"Search","type":"SL","position":733,"weight":1},{"id":23,"lemma":"Engine","type":"SL","position":740,"weight":1},{"id":24,"lemma":"Optimization","type":"SL","position":747,"weight":1},{"id":25,"lemma":")","type":"SS","position":759,"weight":1},{"id":26,"lemma":"의","type":"JKG","position":760,"weight":0.170021},{"id":27,"lemma":"문제","type":"NNG","position":764,"weight":0.283232},{"id":28,"lemma":"가","type":"JKS","position":770,"weight":0.152286},{"id":29,"lemma":"있","type":"VA","position":774,"weight":0.124503},{"id":30,"lemma":"다","type":"EF","position":777,"weight":0.186337},{"id":31,"lemma":".","type":"SF","position":780,"weight":1}]},{"id":8,"text":"구글 봇의 경우는 JS를 지원하지만, 다른 검색엔진의 경우 그렇지 않기 때문에 문제가 된다.","morp":[{"id":0,"lemma":"구글","type":"NNP","position":781,"weight":0.0579249},{"id":1,"lemma":"봇","type":"NNG","position":788,"weight":0.0817555},{"id":2,"lemma":"의","type":"JKG","position":791,"weight":0.129343},{"id":3,"lemma":"경우","type":"NNG","position":795,"weight":0.170482},{"id":4,"lemma":"는","type":"JX","position":801,"weight":0.0832503},{"id":5,"lemma":"JS","type":"SL","position":805,"weight":1},{"id":6,"lemma":"를","type":"JKO","position":807,"weight":0.12601},{"id":7,"lemma":"지원","type":"NNG","position":811,"weight":0.0964165},{"id":8,"lemma":"하","type":"XSV","position":817,"weight":0.0373911},{"id":9,"lemma":"지만","type":"EC","position":820,"weight":0.0923707},{"id":10,"lemma":",","type":"SP","position":826,"weight":1},{"id":11,"lemma":"다른","type":"MM","position":828,"weight":0.115686},{"id":12,"lemma":"검색","type":"NNG","position":835,"weight":0.162094},{"id":13,"lemma":"엔진","type":"NNG","position":841,"weight":0.0492659},{"id":14,"lemma":"의","type":"JKG","position":847,"weight":0.215315},{"id":15,"lemma":"경우","type":"NNG","position":851,"weight":0.226048},{"id":16,"lemma":"그렇","type":"VA","position":858,"weight":0.0483836},{"id":17,"lemma":"지","type":"EC","position":864,"weight":0.154412},{"id":18,"lemma":"않","type":"VX","position":868,"weight":0.149311},{"id":19,"lemma":"기","type":"ETN","position":871,"weight":0.157525},{"id":20,"lemma":"때문","type":"NNB","position":875,"weight":0.161235},{"id":21,"lemma":"에","type":"JKB","position":881,"weight":0.125623},{"id":22,"lemma":"문제","type":"NNG","position":885,"weight":0.335729},{"id":23,"lemma":"가","type":"JKC","position":891,"weight":0.0947531},{"id":24,"lemma":"되","type":"VV","position":895,"weight":0.143926},{"id":25,"lemma":"ㄴ다","type":"EF","position":895,"weight":0.148705},{"id":26,"lemma":".","type":"SF","position":901,"weight":1}]}]
`;
const keywordArray = [];
const jointTypeArray = ["JKS", "JKC", "JKG", "JKO", "JKB", "JKQ"];
const nounTypeArray = ["NNP", "NNG", "SL"];
const suffixTypeArray = ["XSN", "XSV", "XSA"];

const jsonDatas = JSON.parse(data);
jsonDatas.forEach((jsonData) => {
  const text = jsonData.text;
  const morp = jsonData.morp;
  let i = 0;
  morp.forEach((element, idx) => {
    if (jointTypeArray.includes(element.type)) {
      let crrIdx = idx - 1;
      let string = "";
      while (crrIdx >= 0) {
        if (morp[crrIdx].type === "NNB") break;
        if (nounTypeArray.includes(morp[crrIdx].type)) {
          let suffix = " ";
          if (crrIdx > 0 && suffixTypeArray.includes(morp[crrIdx + 1].type)) {
            suffix = morp[crrIdx + 1].lemma;
          }
          string = morp[crrIdx].lemma + suffix + string;
          if (
            crrIdx > 0 &&
            !nounTypeArray.includes(morp[crrIdx - 1].type) &&
            !suffixTypeArray.includes(morp[crrIdx - 1].type)
          ) {
            break;
          }
        }
        crrIdx -= 1;
      }
      const crrKeyword = string.trim();
      if (crrKeyword) {
        keywordArray.push(crrKeyword);
      }
    }
  });
});
console.log(JSON.stringify(keywordArray));

const randomIndexes = [];
while (randomIndexes.length < 5) {
  // 배열 인덱스 중 무작위 5개의 인덱스를 선택한다.
  const randomIndex = Math.floor(Math.random() * keywordArray.length);
  if (!randomIndexes.includes(randomIndex)) {
    randomIndexes.push(randomIndex);
  }
}

// 인덱스들을 오름차순으로 정렬한다.
randomIndexes.sort((a, b) => a - b);
// 해당하는 인덱스의 키워드들을 배열로 반환한다.
const sortedKeyword = randomIndexes.map((index) => {
  return keywordArray[index];
});
console.log(JSON.stringify(sortedKeyword));

let fromIndex = 0;
const answersKeyword = [];
const answersIndex = [];
sortedKeyword.forEach((value) => {
  let target = value;
  let indexResult = originalText.indexOf(target, fromIndex);
  if (indexResult < 0) target = value.split(" ").join("");
  indexResult = originalText.indexOf(target, fromIndex);
  if (indexResult >= 0) {
    answersKeyword.push(target);
    answersIndex.push(indexResult);
    fromIndex = indexResult + 1;
  }
});

const slicedTextArray = [];
const replacedTextArray = [];
answersIndex.forEach((answerIndex, idx) => {
  //만약 slicedTextArray가 없다면, 최초 키워드의 인덱스 전까지의 모든 문자열을 배열에 삽입한다.
  if (!slicedTextArray.length) {
    slicedTextArray.push(originalText.slice(0, answerIndex));
  }
  //현재 키워드의 인덱스부터 다음 키워드의 인덱스까지를 slice한다. 만일 다음 키워드가 없다면 끝까지 슬라이스 된다.
  const slicedText = originalText.slice(answerIndex, answersIndex[idx + 1]);
  //슬라이스한 문자열에서 키워드를 찾아 키워드를 '{0번 문제}'로 바꾼다.
  const replacedText = slicedText.replace(
    answersKeyword[idx],
    `\{문제 ${idx + 1}번\}`
  );
  //바꾼 문자열을 배열에 추가한다.
  slicedTextArray.push(slicedText);
  replacedTextArray.push(replacedText);
});

//배열을 모두 합치면 원하는 문자열이 된다.
console.log(JSON.stringify(answersKeyword));
console.log(slicedTextArray.join(""));
console.log(replacedTextArray.join(""));
