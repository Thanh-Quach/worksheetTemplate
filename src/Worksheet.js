import 'epenbook-components/css/index.css';
import Banner from 'epenbook-components/assets/banner.jpg';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Metatdata } from './content/metadata';
import { WorksheetsPageTemplate } from 'epenbook-components';
import Page from './content/content';
import { InputGroup, Form } from 'react-bootstrap';
import { useState } from 'react';


const Worksheet = ()  => {
    const [inProgress, setInProgress] = useState('');


    return(
    <div className={`${inProgress? 'mt-5':''} bg-dark worksheet`}>
        {!inProgress?Metatdata.content.map((pageNo, index)=>
            <div key={index}>
                <WorksheetsPageTemplate
                    key={index}
                    title={Metatdata.worksheetsTitle} 
                    score={Metatdata.score}
                    objective={Metatdata.objective}
                    showBanner={Metatdata.showBanner}
                    instruction={Metatdata.instruction}
                    pageNumber={pageNo}
                    bannerSrc={Banner}
                >
                    <Page content={Metatdata.value}/>
                </WorksheetsPageTemplate>
            </div>
        ):
                <WorksheetsPageTemplate
                    title={Metatdata.worksheetsTitle} 
                    pageNumber={inProgress}
                >
                    <Page content={Metatdata.value}/>
                </WorksheetsPageTemplate>
        }
        <div className='fixed-top w-100 bg-secondary d-flex align-items-center text-white noprint shadow'>
                <InputGroup className="p-2 text-white w-25">
                    <InputGroup.Text >Current working page #</InputGroup.Text>
                    <Form.Control
                        value={inProgress} 
                        onChange={(e)=>setInProgress(e.target.value)}
                        type='number'
                    />
                </InputGroup>
                {inProgress?'Some contents are expected to be disapear':''}
        </div>
    </div>
    )
}

export default Worksheet;
