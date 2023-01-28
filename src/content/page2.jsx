import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { Image } from "react-bootstrap";

import { 
  TrigRatios, 
  ThetaSymbol, 
  Fraction, 
  Sin, 
  Cos, 
  Tan, 
  DoubColQuestions 
} from 'epenbook-components';



export default function Page () {
  const Excercise8111set = ['a','b','c','d','e','f'];

  const TrigFormular = (props) =>{
    return(
        <div className="col text-center my-2">
            {props.value} <ThetaSymbol/> = <Fraction value={[props.num, props.deno]}/>
        </div>
    )
  }
  
  return(
  <div>
		<div className="row align-items-start">
			<div className="text-white d-flex justify-content-center bg-excercise-primary" style={{width:'0'}}><b>1</b></div>
			<div className="col bg-white pe-0 ps-2"><b>For a given angle, label the sides of the right triangles below with O for Opposite, A for Adjacent and H for Hypotenuse.</b></div>
		</div>
    <div className="row mt-2" style={{height:'5.5in'}}>
      <div className="col row align-items-around">
        <div className="row">
            {Excercise8111set.map((items, index)=>
                <DoubColQuestions key={index} questionNo={items} imageSrc={'./assets/Picture3.png'}/>
            )}
        </div>
      </div>
    </div>
    <div>
      <div className="">For any acute angle <ThetaSymbol/> in a right triangle:</div>
      <div className="row justify-content-around p-2 mt-2 bg-header-secondary mx-auto">
          {TrigRatios.map((items, index)=> 
              <TrigFormular key={index} value={items[0]} num={items[1]} deno ={items[2]}/>
          )}
      </div>
      <div className="border p-2">
        <div className="row align-items-center pe-4">
          <div className="" style={{width:'0'}}>
            <FontAwesomeIcon 
              className='font-16pt'
              icon={faBookmark}
            />
          </div>
          <div className="col ps-4">
            <p className="mb-2">Remark: To remembering the rule to calculate <Sin/>, <Cos/>, and <Tan/> use the word</p>
            <b className="bg-highlight p-1">SOH - CAH - TOA</b>
          </div>
        </div>
        <div className="row">
          {TrigRatios.map((items, index)=>
          <div key={index} className="col text-center">
            <Image src="assets/Picture3.png" className="w-75"/>
              <TrigFormular value={items[0]} num={items[1]} deno ={items[2]}/>
            <p><b>{items[3]}</b></p>
          </div>
          )}
        </div>
      </div>
    </div>
  </div>
  )
}