const exportSVG = (state, type) => {
  const svgExport = document.createElementNS("http://www.w3.org/2000/svg", "svg")
  svgExport.setAttributeNS(null, "viewBox", "0 0 360 360")
  const canvas = document.createElement('canvas')
  canvas.setAttribute("width","512")
  canvas.setAttribute( "height","512")

  //Add Background
  const background = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  background.setAttributeNS(null, "x", 0);
  background.setAttributeNS(null, "y", 0);
  background.setAttributeNS(null, "width", 360);
  background.setAttributeNS(null, "height", 360);
  background.setAttributeNS(null, "fill", state.background.color);
  svgExport.append(background)

  //Add Hairstyle
  const hair = document.getElementById(`hairstyle-${state.hairstyle.type}`).cloneNode(true);
  hair.removeAttributeNS(null, "id");
  hair.setAttributeNS(null, "fill", state.hairstyle.color);
  svgExport.append(hair);

  //Add Ears
  const ear = document.getElementById(`ears-${state.ears.type}`).cloneNode(true);
  ear.removeAttributeNS(null, "id");
  ear.setAttributeNS(null, "fill", state.ears.color);
  svgExport.append(ear)
  const ear2 = ear.cloneNode(true)
  ear2.removeAttributeNS(null,'id')
  ear2.setAttributeNS(null, "style", "transform-origin: center center; transform: scaleX(-1)");
  svgExport.append(ear2)

  //Add Fringe
  const fringe = document.getElementById(`fringe-${state.fringe.type}`).cloneNode(true);
  fringe.removeAttributeNS(null, "id");
  fringe.setAttributeNS(null, "fill", state.fringe.color);
  svgExport.append(fringe);
  if(state.wrinkles.wrinklesforeheadType) {
    const wrinklesforehead = document.getElementById(`wrinklesforehead-${state.wrinkles.wrinklesforeheadType}`).cloneNode(true);
    wrinklesforehead.removeAttributeNS(null, "id");
    wrinklesforehead.setAttributeNS(null, "stroke", state.wrinkles.wrinklesforeheadColor);
    svgExport.append(wrinklesforehead)
    const wrinklesforehead2 = wrinklesforehead.cloneNode(true)
    wrinklesforehead2.removeAttributeNS(null,'id')
    wrinklesforehead2.setAttributeNS(null, "style", "transform-origin: center center; transform: scaleX(-1)");
    svgExport.append(wrinklesforehead2)
  }

  //Add Jawline
  const jawline = document.getElementById(`jawline-${state.jawline.type}`).cloneNode(true);
  jawline.removeAttributeNS(null, "id");
  jawline.setAttributeNS(null, "fill", state.jawline.color);
  svgExport.append(jawline);
  if(state.wrinkles.wrinkleschinType) {
    const wrinkleschin = document.getElementById(`wrinkleschin-${state.wrinkles.wrinkleschinType}`).cloneNode(true);
    wrinkleschin.removeAttributeNS(null, "id");
    wrinkleschin.setAttributeNS(null, "stroke", state.wrinkles.wrinkleschinColor);
    svgExport.append(wrinkleschin)
    const wrinkleschin2 = wrinkleschin.cloneNode(true)
    wrinkleschin2.removeAttributeNS(null,'id')
    wrinkleschin2.setAttributeNS(null, "style", "transform-origin: center center; transform: scaleX(-1)");
    svgExport.append(wrinkleschin2)
  }
  if(state.wrinkles.wrinklescheekbonesType) {
    const wrinklescheekbones = document.getElementById(`wrinklescheekbones-${state.wrinkles.wrinklescheekbonesType}`).cloneNode(true);
    wrinklescheekbones.removeAttributeNS(null, "id");
    wrinklescheekbones.setAttributeNS(null, "stroke", state.wrinkles.wrinklescheekbonesColor);
    svgExport.append(wrinklescheekbones)
    const wrinklescheekbones2 = wrinklescheekbones.cloneNode(true)
    wrinklescheekbones2.removeAttributeNS(null,'id')
    wrinklescheekbones2.setAttributeNS(null, "style", "transform-origin: center center; transform: scaleX(-1)");
    svgExport.append(wrinklescheekbones2)
  }

  //Add Mouth
  if(state.wrinkles.wrinklesmouthType) {
    const wrinklesmouth = document.getElementById(`wrinklesmouth-${state.wrinkles.wrinklesmouthType}`).cloneNode(true);
    wrinklesmouth.removeAttributeNS(null, "id");
    wrinklesmouth.setAttributeNS(null, "stroke", state.wrinkles.wrinklesmouthColor);
    svgExport.append(wrinklesmouth)
    const wrinklesmouth2 = wrinklesmouth.cloneNode(true)
    wrinklesmouth2.removeAttributeNS(null,'id')
    wrinklesmouth2.setAttributeNS(null, "style", "transform-origin: center center; transform: scaleX(-1)");
    svgExport.append(wrinklesmouth2)    
  }
  if(state.mouth.lowerlipType){
    const lowerlip = document.getElementById(`lowerlip-${state.mouth.lowerlipType}`).cloneNode(true);
    lowerlip.removeAttributeNS(null, "id");
    lowerlip.setAttributeNS(null, "fill", state.mouth.lowerlipColor);
    svgExport.append(lowerlip);
  }
  if(state.mouth.upperlipType){
    const upperlip = document.getElementById(`upperlip-${state.mouth.upperlipType}`).cloneNode(true);
    upperlip.removeAttributeNS(null, "id");
    upperlip.setAttributeNS(null, "fill", state.mouth.upperlipColor);
    svgExport.append(upperlip);
  }
  if(state.mouth.smileType){
    const smile = document.getElementById(`smile-${state.mouth.smileType}`).cloneNode(true);
    smile.removeAttributeNS(null, "id");
    smile.setAttributeNS(null, "strokeWidth", 5);
    smile.setAttributeNS(null, "stroke", state.mouth.smileColor);
    smile.setAttributeNS(null, "fill", "none");
    svgExport.append(smile);
  }

  //Add Mustachio
  if(state.mustachio.type){
    const mustachio = document.getElementById(`mustachio-${state.mustachio.type}`).cloneNode(true);
    mustachio.removeAttributeNS(null, "id");
    mustachio.setAttributeNS(null, "fill", state.mustachio.color);
    svgExport.append(mustachio);
    const mustachio2 = mustachio.cloneNode(true);
    mustachio2.removeAttributeNS(null,'id');
    mustachio2.setAttributeNS(null, "style", "transform-origin: center center; transform: scaleX(-1)");
    svgExport.append(mustachio2);
  }
  //Add Nose
  if(state.nose.nostrilsType){
    const nostrils = document.getElementById(`nostrils-${state.nose.nostrilsType}`).cloneNode(true);
    nostrils.removeAttributeNS(null, "id");
    nostrils.setAttributeNS(null, "stroke", state.nose.nostrilsColor);
    svgExport.append(nostrils);
  }
  if(state.nose.septumType){
    const septum = document.getElementById(`septum-${state.nose.septumType}`).cloneNode(true);
    septum.removeAttributeNS(null, "id");
    septum.setAttributeNS(null, "stroke", state.nose.septumColor);
    svgExport.append(septum);
  }

  //Add Eyes
  const eyeLeft = document.createElementNS("http://www.w3.org/2000/svg", "g");
  eyeLeft.setAttributeNS(null, "style", "transformOrigin: center center");

  if(state.wrinkles.wrinkleseyesType) {
    const wrinkleseyes = document.getElementById(`wrinkleseyes-${state.wrinkles.wrinkleseyesType}`).cloneNode(true)
    wrinkleseyes.removeAttributeNS(null,'id')
    wrinkleseyes.setAttributeNS(null, "stroke", state.wrinkles.wrinkleseyesColor);
    eyeLeft.append(wrinkleseyes)  
  }
  if(state.eyes.eyelidType) {
    const eyelid = document.getElementById(`eyelid-${state.eyes.eyelidType}`).cloneNode(true)
    eyelid.removeAttributeNS(null,'id')
    eyelid.setAttributeNS(null, "fill", state.eyes.eyelidColor);
    eyeLeft.append(eyelid)
  }
  if(state.eyes.whiteType) {
    const white = document.getElementById(`white-${state.eyes.whiteType}`).cloneNode(true)
    white.removeAttributeNS(null,'id')
    eyeLeft.append(white)  
  }
  if(state.eyes.irisType) {
    const iris = document.getElementById(`iris-${state.eyes.irisType}`).cloneNode(true)
    iris.removeAttributeNS(null,'id')
    iris.setAttributeNS(null, "fill", state.eyes.irisColor);
    eyeLeft.append(iris)   
  }
  if(state.eyes.pupilType) {
    const pupil = document.getElementById(`pupil-${state.eyes.pupilType}`).cloneNode(true)
    pupil.removeAttributeNS(null,'id')
    pupil.setAttributeNS(null, "fill", state.eyes.pupilColor);
    eyeLeft.append(pupil)
  }
  if(state.eyes.eyelashesType) {
    const eyelashes = document.getElementById(`eyelashes-${state.eyes.eyelashesType}`).cloneNode(true)
    eyelashes.removeAttributeNS(null,'id')
    eyelashes.setAttributeNS(null, "stroke", state.eyes.eyelashesColor);
    eyeLeft.append(eyelashes) 
  }
  svgExport.append(eyeLeft)
  const eyeRigth = eyeLeft.cloneNode(true)
  eyeRigth.setAttributeNS(null, "style", "transform-origin: center center; transform: scaleX(-1)")
  svgExport.append(eyeRigth)

  //Add Eywbrows
  if(state.eyebrows.type){
    const eyebrows = document.getElementById(`eyebrows-${state.eyebrows.type}`).cloneNode(true);
    eyebrows.removeAttributeNS(null, "id");
    eyebrows.setAttributeNS(null, "fill", "none");
    eyebrows.setAttributeNS(null, "stroke", state.eyebrows.color);
    svgExport.append(eyebrows);
    const eyebrows2 = eyebrows.cloneNode(true);
    eyebrows2.removeAttributeNS(null,'id');
    eyebrows2.setAttributeNS(null, "style", "transform-origin: center center; transform: scaleX(-1)");
    svgExport.append(eyebrows2);
  }

  //Add Glasses
  if(state.glasses.type){
    const glasses = document.getElementById(`glasses-${state.glasses.type}`).cloneNode(true);
    glasses.removeAttributeNS(null, "id");
    glasses.setAttributeNS(null, "fill", state.glasses.color);
    svgExport.append(glasses);
    const glasses2 = glasses.cloneNode(true);
    glasses2.removeAttributeNS(null,'id');
    glasses2.setAttributeNS(null, "style", "transform-origin: center center; transform: scaleX(-1)");
    svgExport.append(glasses2);
  }
 
  function triggerDownload (imgURI, fileName) {
    const evt = new MouseEvent("click", {
      view: window,
      bubbles: false,
      cancelable: true
    });
    const a = document.createElement("a");
    a.setAttribute("download", fileName);
    a.setAttribute("href", imgURI);
    a.setAttribute("target", '_blank');
    a.dispatchEvent(evt);
  }



const svgString = new XMLSerializer().serializeToString(svgExport);
const ctx = canvas.getContext("2d");
const img = new Image();
const svg = new Blob([svgString], {type: "image/svg+xml;charset=utf-8"});
let url = URL.createObjectURL(svg);



if(type==="PNG") {
  // url = URL.createObjectURL(svg);
  img.onload = function() {
      ctx.drawImage(img, 0, 0);
      const png = canvas.toDataURL("image/png");
      triggerDownload(png, "avatar.png")
      URL.revokeObjectURL(png);
  };
}
if(type==="JPG") {
  img.onload = function() {
    ctx.drawImage(img, 0, 0);
    const jpg = canvas.toDataURL("image/jpg");
    triggerDownload(jpg, "avatar.jpg")
    URL.revokeObjectURL(jpg);
  }
}
if(type==="SVG") {
  img.onload = function() {
    ctx.drawImage(img, 0, 0);
    const svgURL = canvas.toDataURL("image/svg");
    triggerDownload(svgURL, "avatar.svg")
    URL.revokeObjectURL(svgURL);
  }
}




img.src = url;
}

export default exportSVG;