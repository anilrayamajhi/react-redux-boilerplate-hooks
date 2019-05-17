import React, { useEffect } from "react";

import { useAppState } from '../utilities/app-state'
import { getPosts } from "../actions";

export default function Home(props) {
  const [ { posts }, dispatch ] = useAppState();


  useEffect(() => {
    console.log('UA:  ', posts.loading);
    
    posts.loading && getPosts(dispatch); 
  }, [ posts, dispatch ])

  
console.log('====================================');
console.log(props, useAppState());
console.log('====================================');

if(!posts.loading){
  console.log(posts);
  
}
  return <div>GI</div>;
}
