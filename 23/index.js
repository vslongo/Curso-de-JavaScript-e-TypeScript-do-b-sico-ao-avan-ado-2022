let VarA = `A`; // B
let VarB = `B`; // C
let VarC = `C`; // A

const VTA = VarA;

VarA = VarB;
VarB = VarC;
VarC = VTA;


console.log(VarA, VarB, VarC);