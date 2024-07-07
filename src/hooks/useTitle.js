import React, { useEffect } from 'react'

export const useTitle = (title) => {
  
    useEffect(()=>{
        document.title=`${title} - Codebook`;
    },[title]);
  
  
    return null;
}
