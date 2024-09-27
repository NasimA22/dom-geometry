function calculateEllipseArea(){
    const a = getInputvalue('ellipse-a');
    const b = getInputvalue('ellipse-b');
    
    const area =3.14 * a * b;
    setInnerText('ellipse-area', area);
    }