function isTouching(Avi,Aadi){

    if (Avi.x-Aadi.x<Avi.width/2+Aadi.width/2&&
      Aadi.x-Avi.x<Aadi.width/2+Avi.width/2&&
      Avi.y-Aadi.y<Avi.height/2+Aadi.height/2&&
      Aadi.y-Avi.y<Aadi.height/2+Avi.height/2 ){
  
       return true;
    }
  
  else{
  return false;
    
  }
   }