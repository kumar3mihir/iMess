// PersonalDetail.jsx
import React from 'react';

const PersonalDetail = ({ mail, department, phone }) => {
    return (
        <div className="personal-detail ml-4">
            <p className="text-gray-600">
                <strong>Email:</strong> {mail}
            </p>
            <p className="text-gray-600">
                <strong>Department:</strong> {department}
            </p>
            <p className="text-gray-600">
                <strong>Phone:</strong> {phone}
            </p>
        </div>
    );
};

export default PersonalDetail;
