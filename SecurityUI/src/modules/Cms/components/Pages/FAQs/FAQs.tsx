import Breadcrumb from '@/components/Breadcrumb';
import ContextJSX from "@/components/ContextJsx";
import Header from "@/components/Header";
import { useLang } from '@/hooks/useLang';
import { Card, Collapse } from 'antd';
import { FC } from 'react';

const FAQs: FC = props => {
    const { t } = useLang();
    const { Panel } = Collapse;

    const faqs = [
        {
            question: 'How to find my desired services?',
            answer: `<p>There are many ways you can find and avail your desired services:</p>
            <ul>
                <li>From the home page (<em>aka</em> landing page) you can click on the <strong>🔍 Find Services</strong> button to see all the Services</li>
                <li>From the home page (<em>aka</em> landing page) you can see all the avaiable services categorized under "Services", "Organizations", and "Recipients"</li>
                <li>From the top navigation menu, you can click on the <strong>Services</strong> menu item, and can see all the available services provided by this portal</li>
                <li>If you are still confused where to find, use the 🔍 Search feature (available on the top-right) to find your desired services</li>
            </ul>`
        },
        {
            question: 'How can I track My Application?',
            answer: `<p>All the Applications submitted by you are stored in your user account. They have unique <strong>Tracking Numbers</strong> to track easily.</p>
            <p>After logging into your account, from the top-right of the interface, you can click on the User Icon, and then on <strong>Applied Services</strong>. From there you can get your applied services sorted by their categories. You can track them and be informed about their current status. You will also get necessary notifications within the same panel when necessary.</p>`
        },
        {
            question: 'Can I browse the System in Bangla (Bengali)?',
            answer: `<p>All the interfaces are available in both <strong>English</strong> and <strong>Bengali</strong> (<code>bn_BD</code>).</p>
            <p>From the top-right corner of the user interface, you can swtich language from English 🔃 Bengali and vice versa</p>`
        }
    ];

    return (
        <div className='container mb-4'>
            <ContextJSX>
                <Header>
                    <Header.PageTitle>{t('Frequently Asked Questions (FAQs)')}</Header.PageTitle>
                </Header>
                <Breadcrumb>
                    <Breadcrumb.Item>{t('Frequently Asked Questions (FAQs)')}</Breadcrumb.Item>
                </Breadcrumb>
            </ContextJSX>

            <Card className="shadow">
                <Collapse accordion defaultActiveKey={['1']}>
                    {faqs.map((faq, index) => (
                        <Panel header={<strong>{ t(faq.question) }</strong>} key={index+1}>
                            <div dangerouslySetInnerHTML={{ __html: t(faq.answer) }}/>
                        </Panel>
                    ))}
                </Collapse>
            </Card>
        </div>
    );
}

export default FAQs;
