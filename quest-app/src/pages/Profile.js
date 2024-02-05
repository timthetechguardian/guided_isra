import React from 'react';

const ProfilePage = () => {
    const unfinishedQuestionnaires = [
        { id: 1, title: 'Questionnaire 1' },
        { id: 2, title: 'Questionnaire 2' },
        { id: 3, title: 'Questionnaire 3' },
        // Add more questionnaires as needed
    ];

    return (
        <div>
            <h1>Profile Page</h1>
            <h2>Unfinished Questionnaires:</h2>
            <ul>
                {unfinishedQuestionnaires.map(questionnaire => (
                    <li key={questionnaire.id}>{questionnaire.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProfilePage;