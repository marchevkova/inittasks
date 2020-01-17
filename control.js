function control(row){
  if(row.day > actualday){
    color = green;
  }
  else{
    color = red;
  }
  return color;
}
