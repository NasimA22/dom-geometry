function calculatePentagonArea(){
    const a = getInputvalue('pentagon-a');
    const b = getInputvalue('pentagon-b');
    
    const area = a * b;
    setInnerText('pentagon-area', area);
    }