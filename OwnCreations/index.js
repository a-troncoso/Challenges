const challenge = (arr = []) => {
  
  
	const genTwist = () => {
    let i = 1;
    const halfLength = arr.length / 2;
    let res = [];
    while (i <= halfLength) {
      res.push(arr[i-1], arr[arr.length - i]);
      i++;

    }
    if (arr.length % 2 === 1) res.push(arr[i-1])

    return res;
  }
  
  const isConcecutive = (list = []) => {
    let isConcecutive = true, n = 0;
    const toNextPos = 1;
    while (n < list.length - 1 && isConcecutive) {
      isConcecutive = list[n]+toNextPos === list[n+toNextPos];
      n++;
    }
    
    return isConcecutive;
  }
  
  return {
    genTwist,
    isConcecutive
  }
  
}

const ch = challenge([1, 3, 5, 7, 6, 4, 3]);
const twist = ch.genTwist();
const isConcecutive = ch.isConcecutive(twist);
