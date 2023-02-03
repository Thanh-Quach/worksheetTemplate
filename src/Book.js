import 'epenbook-components/css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Metatdata } from './content/metadata';
import { PageTemplate, TableOfContents } from 'epenbook-components';
import { Image, InputGroup, Form } from 'react-bootstrap';
import { useState } from 'react';


const Book = ()  => {
    const [inProgress, setInProgress] = useState('');

    const PageNo = ({pageNumber}) => {
        var Page = require(`./content/page${inProgress?inProgress:pageNumber}.jsx`).default
        return <Page/>;
    }

    return(
    <div className={`${inProgress? 'mt-5':''} bg-dark`}>
        {!inProgress&&
        <>
        <div className='letter-size mx-auto'>
            <Image src={Metatdata.coverPage} className='w-100'/>
        </div>
        <TableOfContents 
            content={Metatdata.toc}
            maxFilled={Metatdata.MaxTocPerPage}
        />
        </>
        }
        {!inProgress?Metatdata.toc.map((chapter, cindex)=>
            <div key={cindex}>
                {chapter.sections.map((section, sindex)=>
                <div
                    key={sindex}
                >
                    {section.content&&section.content.map((page, index)=>
                        <PageTemplate
                            key={index}
                            chapterTitle={chapter.title} 
                            chapterNo={cindex+1} 
                            sectionTitle={section.title} 
                            sectionNo={sindex+1}
                            pageNumber={page}
                        >
                            <PageNo key={index} pageNumber={page}/>
                        </PageTemplate>
                    )}
                </div>
                )}
            </div>
        ):
                        <PageTemplate
                            chapterTitle={''} 
                            chapterNo={''} 
                            sectionTitle={''} 
                            sectionNo={''}
                            pageNumber={inProgress}
                        >
                            <PageNo pageNumber={inProgress}/>
                        </PageTemplate>
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
                {inProgress?'Single page view will remove chapter + sections information':''}
        </div>
    </div>
    )
}

export default Book;
