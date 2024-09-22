const createCSV = (csv) => {
    return csv.split('\n').map(el => el.split(','))
}

const str = `abc,def,ghi
jkl,mno,pqr
stu,uvw,xyz`

console.log(createCSV(str));