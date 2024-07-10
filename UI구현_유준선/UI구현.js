const wiDth = document.getElementById("wiInput");
const heIght = document.getElementById("hiInput");
const fonTsize = document.getElementById("fsInput");
const fontColor = document.getElementById("coInput");
const bcColor = document.getElementById("bcInput");
const textIn = document.getElementById("textInput");
const execute = document.querySelector("#execute");
const executearea = document.querySelector("#executeArea")

execute.addEventListener("click", function(){
  const fontweight = document.querySelector("[name = fwInput]:checked");
  const rowalign = document.querySelector("[name = rowInput]:checked");
  const colalign = document.querySelector("[name = colInput]:checked");

  widnum = Number(wiDth.value);
  heinum = Number(heIght.value);
  fontsizenum = Number(fonTsize.value);


  let wei = '';
  if(fontweight === null){wei = 'normal';
  }else wei = fontweight;

  let row = '';
  if(rowalign === null){row = 'left';
  }else row = rowalign;

  let col = '';
  if(colalign === null){col = 'baseline';
  }else col = colalign;


  executearea.style.width = widnum + 'px';
  executearea.style.height = heinum + 'px';
  executearea.style.fontSize = fontsizenum + 'px';
  executearea.innerText = textIn.value;
  executearea.style.fontWeight = wei.value;
  executearea.style.color = fontColor.value;
  executearea.style.backgroundColor = bcColor.value;
  executearea.style.justifyContent = row.value;
  executearea.style.alignItems = col.value;
  executearea.style.opacity = 1;
})
