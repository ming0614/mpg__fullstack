import React,{ useContext,  useState } from 'react';
import logo from './logo.svg';
import './App.css';

const ThemeContext = React.createContext(null);
export function ChildWithTheme () {
  const theme = useContext(ThemeContext);
  return (
    <div>皮肤{theme}</div>
  )
}

function ChildNoTheme(){
  console.log('不关心皮肤的子组件被渲染')
  return <div>皮肤改变别让我重新渲染</div>
}

// 为什么? 数据变了, 组件要检测哪些地方跟相关的变了的数据, 重新渲染VDOM树, 
// => 更新局部 自顶向下   函数式组件 React.createElement({
//  ChildWithTheme,
//  props: {
//   theme
//}    immutable  内存中新的一份
//})



function ThemeApp({children}) {
  const [theme,setTheme] = useState("light");
  const onChangeTheme = () => setTheme(theme==='light'?'dark':'light')
  return (
    <ThemeContext.Provider value={theme}>
      <button onClick={onChangeTheme}>改变皮肤</button>
      {children}
    </ThemeContext.Provider>
  )
}






function App() {
  
  return(
    
      <ThemeApp>
        <div>fdfdffdf</div>
        <ChildWithTheme/>
        <ChildNoTheme/>
        <ChildNoTheme/>
        <ChildNoTheme/>
        <ChildNoTheme/>
        <ChildNoTheme/>
        <ChildNoTheme/>
        <ChildNoTheme/>
      </ThemeApp>
    
    
  )
}

export default App;



