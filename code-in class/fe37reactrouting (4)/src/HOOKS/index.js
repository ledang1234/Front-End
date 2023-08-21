import React  , { useEffect,useState , useCallback , useMemo} from "react"
import Child from "./child";

export default function HOOKS (){
    const [number , setNumber] = useState(0);

    const handleTangSo = () => {
            setNumber(number + 1);
    }

    useEffect(()=> {
        /**
         * componentDidMount; componentDisUpdate; componentWillUnmount ben Class  component
         * Neu nhu tham so thu 2 cua  usserEffect la [] =>   componentDidMount ben class  component
         * Neu nhu tham so thu 2 cua  usserEffect la [number] (nhan vao tate thay doi) => componentDidUpdate
         */
        
        console.log("useEffect");
    }, [number]);

    useEffect(()=>{
        /**
         * Neu nbu return ve 1 arrow function => componentWillUnmount  ben Class component
         */
       let interval = setInterval(()=>{
           console.log("hello");
       }, 1000)

       return () => {
           console.log ("useEffect - willUnmount");
           clearInterval(interval);
       }
    })
    const showNumber =  () => {
        console.log("showNumber")
    }

    const showNumberCallBack = useCallback(showNumber,[])

    const numberUp = () => {
        let i =  0;
        while (i <1000) i++;
        console.log(i);
        return  i;
    }

    const numberUseMemo  = useMemo (()  => numberUp(), [])
    return (
        <div>
            <h3>HOOKS</h3>
            <h3>Number: {number} </h3>
            <button onClick={handleTangSo} className="btn btn-success">Tang  so</button>
            <Child showNumber={showNumberCallBack}/>

            <h3>NumberUp: {numberUseMemo}</h3>
        </div>

    )
        

}