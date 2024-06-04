import Content from "./Content"
import Header from "./Header"
import Footer from "./Footer"
export default function UseCon({isDark, setIsDark}) {
  return (
    <div className="page">
      <Header isDark={isDark}/>
      <Content isDark={isDark}/>
      <Footer isDark={isDark} setIsDark={setIsDark}/> 
    </div>
  )
}
