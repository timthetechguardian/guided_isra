import React from "react";
import './../Main.css';

const headings = [
    {head: 'Personal Data', id: 1},
    {head: 'Pseudonymization and Pseudonymized Personal Data', id: 2},
    {head: 'General Business Contact', id: 3},
    {head: 'Data Concerning Privacy of a Single Individual', id: 4},
    {head: 'Financial Data', id: 5},
    {head: 'Employment Documents', id: 6},
    {head: 'Special Categories of Personal Data', id: 7},
    {head: 'Anonymization and Anonymized Personal Data', id: 8},
    {head: 'Confidentiality', id: 9},
    {head: 'Integrity', id: 10},
    {head: 'Availability', id: 11},
    {head: 'Privacy Impact Assessment (PIA)', id: 12},
    {head: 'Information Security Risk Assessment (ISRA)', id: 13},
];

const content = [
    {cont: 'Information relating to an identified or identifiable natural person. An identifiable person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an email address, an identification number, location data, or an online identifier.', id: 1},
    {cont: 'The processing of personal data in such a manner that the data can no longer be attributed to a specific data subject without the use of additional information, provided that such additional information is kept separately and is subject to technical and organizational measures to ensure non-attribution. Examples of pseudonymized data include employee IDs, chip IDs, and device identifiers. It is crucial to note that pseudonymized personal data is still considered personal data. Therefore, the required risk mitigation measures applicable to personal data must not be circumvented.', id: 2},
    {cont: 'Personal data related to an individual\'s business or professional roles, such as business phone numbers, email addresses, and company names, as opposed to their private or personal life.', id: 3},
    {cont: 'Any personal data that relates to the private life of an individual, including private contact, personal habits, family, and home life.', id: 4},
    {cont: 'Personal data related to the financial status or activities of an individual or entity, including bank account details, credit information, income, and financial transactions.', id: 5},
    {cont: 'Documents containing personal data related to employment, including employment contracts, performance reviews, payroll information, and disciplinary records.', id: 6},
    {cont: 'Personal data revealing racial or ethnic origin, political opinions, religious or philosophical beliefs, trade union membership, genetic data, biometric data for uniquely identifying a person, data concerning health or data concerning a natural person\'s sex life or sexual orientation.', id: 7},
    {cont: 'This process ensures that the data cannot be linked to any other personal data. Crucially, anonymized data must be rendered non-recoverable by any means, effectively ensuring that it is no longer treated as personal data.', id: 8},
    {cont: 'The information must not be accessible, made available or disclosed to unauthorized persons, entities or processes. Confidential information may not be taken note of without authorization or passed on, i.e. this information will be passed on to not disclosed to unauthorized persons or entities.', id: 9},
    {cont: 'Correctness and completeness of information and the functioning of systems must be given, i.e. the completeness and correctness / genuineness of information assets are protected.', id: 10},
    {cont: 'Authorized persons or entities can access information whenever this is necessary.', id: 11},
    {cont: 'A Privacy Impact Assessment (PIA) is a process designed to identify and evaluate the potential effects that a project or initiative may have on the privacy of individuals. It involves analyzing how personal data is collected, used, shared, and stored, with the aim of identifying risks to privacy and developing measures to mitigate these risks. The PIA ensures that privacy considerations are integrated into the design of projects from an early stage. All projects, processes, or processing activities involving personal data are required to complete the PIA process.', id: 12},
    {cont: 'An Information Security Risk Assessment (ISRA) is a systematic process for evaluating the potential risks to the security, integrity, and availability of information systems. This assessment includes identifying vulnerabilities, threats, and potential impacts to determine the level of risk associated with information systems. ISRA is essential for making informed decisions about implementing appropriate security controls to protect the organization\'s information assets.', id: 13},
];

function HeadingContent({ heading, content }) {
    return (
        <div>
            <h2>{heading.head}</h2>
            <p>{content.cont}</p>
        </div>
    );
}

function FAQ() {
    const headingContentItems = headings.map(heading => {
        const matchingContent = content.find(item => item.id === heading.id);
        return (
            <HeadingContent
                key={heading.id}
                heading={heading}
                content={matchingContent}
            />
        );
    });

    return (
        <div className='PWQ'>
            <div className='CWQ' style={{hyphens:'auto'}}>
                <h1 style={{marginLeft:'3.8vh'}}>Definitions</h1>
                <ul>{headingContentItems}</ul>
            </div>
        </div>
    );
}

export default FAQ;