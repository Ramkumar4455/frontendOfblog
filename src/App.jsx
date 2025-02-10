import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Blog from './Blog.jsx';
import AddBlog from './AddBlog.jsx';
import BlogDetails from './blogDetails.jsx';  
 import Header from './header.jsx'
function App() {
 
  const [datas, setDatas] = useState([]);
 
 
  useEffect(() => {
    const storedData = localStorage.getItem('myData');
    if (storedData) {
      setDatas(JSON.parse(storedData));  
    } else {
     
      const initialData = [
        {
          title: "Why Cr7 is The GOAT?",
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZfCKBi-3GZULvA9eCg89H4zmP4QT-ENoKNCeWyEigWhPqj80xuYKvys1W7d6CRbZjKgG4L25wl1iuLEyZZjoEDQ",
          email: "ramragnarok007@gmail.com",
          description: "Cristiano Ronaldo, often called CR7, is widely regarded as one of the greatest footballers of all time, with many fans and experts considering him the GOAT. His claim to this title is backed by his exceptional achievements, remarkable consistency, and adaptability throughout his long and successful career. Ronaldo has set the standard for excellence in football by excelling in multiple leagues and clubs, including Sporting CP, Manchester United, Real Madrid, Juventus, and now Al Nassr. His dedication, discipline, and relentless pursuit of perfection have allowed him to maintain an elite level of performance throughout his career.Ronaldo's list of individual awards is a testament to his greatness, with multiple Ballon d'Or titles, golden boots, and numerous other accolades to his name. One of the most impressive aspects of his career is his goal-scoring record; he is the all-time top scorer in the UEFA Champions League, holds the record for the most goals for Portugal, and has regularly finished as the leading scorer in both domestic leagues and international tournaments. Ronaldo's ability to deliver in high-pressure moments, including scoring crucial goals in finals and leading his national team to victory in the 2016 UEFA European Championship and the 2019 UEFA Nations League, showcases his impact on the biggest stages.What truly sets Ronaldo apart is his versatility. Unlike many of his peers, he has been able to excel in different playing positions, whether as a winger, forward, or central striker later in his career. His physical attributes, such as speed, strength, and stamina, are complemented by his technical skills, including his powerful shots, heading ability, and dribbling. Ronaldo's mental toughness, along with his ability to evolve as a player over time, has enabled him to remain at the top of his game even as he enters his 30s. In an era filled with extraordinary talent, Cristiano Ronaldo's longevity, adaptability, and unwavering drive have cemented his place as one of the greatest footballers in history.",
          Comments: []
        },
        {
          title: "Cristiano At Juventus",
          url: "https://talksport.com/wp-content/uploads/sites/5/2020/01/GettyImages-1192179860.jpg?strip=all&w=960&quality=100",
          email: "Cristiano@gmail.com",
          description: "During his time at Juventus from 2018 to 2021, Cristiano Ronaldo achieved significant success both individually and with the team. He played a crucial role in helping the club win two Serie A titles in the 2018-19 and 2019-20 seasons, further cementing Juventus' dominance in Italian football. Ronaldo also led the team to victory in the 2020 Coppa Italia and the 2020 Supercoppa Italiana, adding more silverware to his collection. Individually, he became Juventus' top scorer in a single season with 28 goals in 2018-19 and finished as Serie A’s top scorer in the 2020-21 season with 29 goals. Ronaldo's impact went beyond domestic competitions; he continued to deliver in the UEFA Champions League, notably scoring a memorable hat-trick against Atlético Madrid in 2019. By the end of his tenure, he had scored 101 goals in 133 appearances across all competitions, becoming one of the club's all-time greats. Ronaldo’s arrival also elevated Juventus' global profile, increasing the club's commercial reach and helping bring international attention back to Serie A.",
          Comments: []
        },
        {
          title: "Breaking Bad",
          url: "https://th.bing.com/th/id/OIP.o8A6OJgRMDG8dynWoDWvegHaEL?rs=1&pid=ImgDetMain",
          email: "WalterWhite@gmail.com",
          description: "Breaking Bad is an American television series created by Vince Gilligan that aired from 2008 to 2013. Widely regarded as one of the greatest TV shows of all time, it tells the story of Walter White, a high school chemistry teacher turned methamphetamine manufacturer, played by Bryan Cranston. After being diagnosed with terminal lung cancer, Walter decides to use his skills to produce and sell meth in order to secure his family's financial future. He partners with former student Jesse Pinkman, played by Aaron Paul, to navigate the dangerous and unpredictable world of drug cartels, law enforcement, and betrayal.The show is known for its intense character development, particularly the transformation of Walter White from a mild-mannered teacher to a ruthless drug kingpin, adopting the alias Heisenberg. Breaking Bad explores themes of morality, the consequences of choices, and the blurred lines between good and evil. The series also features a strong supporting cast, including Anna Gunn as Skyler White, Dean Norris as Hank Schrader, and Bob Odenkirk as Saul Goodman, whose spin-off Better Call Saul has also garnered critical acclaim.Critically acclaimed for its writing, direction, and performances, Breaking Bad won numerous awards, including 16 Primetime Emmy Awards. Its exploration of the descent into criminality and its portrayal of a morally complex protagonist made it a cultural touchstone and a defining show of the 21st century television landscape. The series also spawned a successful prequel, Better Call Saul, and a sequel film, El Camino: A Breaking Bad Movie, which continued the story of Jesse Pinkman.",
          Comments: []
        }
      ];
      setDatas(initialData);
      localStorage.setItem('myData', JSON.stringify(initialData));  
    }
  }, []);
 
 
  useEffect(() => {
    if (datas.length > 0) {
      localStorage.setItem('myData', JSON.stringify(datas));
    }
  }, [datas]);
 
  const deleteBlog = (index) => {
    setDatas((prevDatas) => {
      const newDatas = prevDatas.filter((item, i) => i !== index);
      return newDatas;
    });
  };
 
  const addCom = (data, index) => {
    setDatas((prevDatas) => {
      const newDatas = prevDatas.map((item, i) =>
        i === index ? { ...item, Comments: [...item.Comments || [], data] } : item
      );
      return newDatas;
    });
  };
 
  const addData = (data) => {
    setDatas((prevDatas) => {
      const newDatas = [...prevDatas, data];
      return newDatas;
    });
  };
 
  const editBlog = (data, index) => {
    setDatas((prevDatas) => {
      const newDatas = prevDatas.map((item, i) =>
        i === index ? { ...data } : item
      );
      return newDatas;
    });
  };
 
  return (
    <Router>
      <Header></Header>
      <div className="app-container">
        <Routes>
          <Route
            path="/"
            element={<><Blog datas={datas} addCom={addCom} deleteBlog={deleteBlog} editBlog={editBlog} /><AddBlog addData={addData} /></>}
          />
          <Route
            path="/blog/:id"
            element={<BlogDetails datas={datas} />}
          />
        </Routes>
      </div>
    </Router>
  );
}
 
export default App;
