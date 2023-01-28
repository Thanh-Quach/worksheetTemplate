import 'epenbook-components/css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Metatdata} from './content/metadata';

import {Chapter, Section, PageTemplate} from 'epenbook-components';
// import Page1 from './content/page1.jsx';
// import Page2 from './content/page2.jsx';

const App = ()  => {
    const PageNo = ({pageNumber}) => {
        var Page = require('./content/page'+pageNumber+'.jsx').default
        return <Page/>;
    }

    return(
    <div>
        {Metatdata.toc.map((chapter, cindex)=>
        <Chapter key={cindex}>
            {chapter.sections.map((section, sindex)=>
            <Section
                key={sindex}
            >
                {section.content&&section.content.map((page, index)=>
                    <PageTemplate
                        chapterTitle={chapter.title} 
                        chapterNo={cindex+1} 
                        sectionTitle={section.title} 
                        sectionNo={sindex+1}
                        pageNumber={page}
                    >
                        <PageNo key={index} pageNumber={page}/>
                    </PageTemplate>
                )}
            </Section>
            )}
        </Chapter>
        )}
    </div>
    )
}

export default App;
