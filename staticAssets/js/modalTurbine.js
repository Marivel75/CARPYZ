let nextTurbine = document.getElementById("nextTurbine");
let imgTurbine = document.getElementById("imgTurbine");
let imagesTurbine = ["EOL_00", "EOL_01", "EOL_02", "EOL_03", "EOL_04"];


function swapNextTurbine() {
  if ( Number(imgTurbine.src[imgTurbine.src.length - 5]) + 1 > 0 && Number(imgTurbine.src[imgTurbine.src.length - 5]) + 1 <= imagesTurbine.length - 1 ) {
    imgTurbine.src = "staticAssets/images/Turbine/EOL_0" + (Number(imgTurbine.src[imgTurbine.src.length - 5]) + 1) +".jpg";
  } else {
    imgTurbine.src = "staticAssets/images/Turbine/EOL_00.jpg";
  };
};

function swapPreviousTurbine() {
  if ( Number(imgTurbine.src[imgTurbine.src.length - 5]) - 1 >= 0 && Number(imgTurbine.src[imgTurbine.src.length - 5]) - 1 <= imagesTurbine.length - 1 ) {
    imgTurbine.src = "staticAssets/images/Turbine/EOL_0" + (Number(imgTurbine.src[imgTurbine.src.length - 5]) - 1) +".jpg";
  } else {
    imgTurbine.src = "staticAssets/images/Turbine/EOL_04.jpg"
  };
};
