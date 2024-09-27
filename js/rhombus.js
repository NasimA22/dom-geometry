function calculateRhombusArea(){
    const a = getInputvalue('rhombus-a');
    const b = getInputvalue('rhombus-b');
    
    const area =0.5 * a * b;
    setInnerText('rhombus-area', area);
    }