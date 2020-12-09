import React, {useEffect, useState} from "react";
import config from "../config";
import compromise from './compromise';
const caseChange = (word) => word[0].toUpperCase() + word.slice(1, word.length)

export const formatTheButtonToBeGrammaticallyCorrect = (text, { busy, valid, success }) => {
    const tense = busy && valid ? "Gerund"
         : (!busy && success ? 'PastTense'
            : 'Infinitive');
    try {
        const document = compromise(text);
        const conjugations = document.verbs().conjugate();

        return caseChange(text.toLowerCase().replace(conjugations[0].Infinitive, conjugations[0][tense]))
    } catch (e) {
        return 'Error ' + text;
    }
}

const Button = ({
    onClick,
    buttonText = "Submit",
    className = "",
    busy = false,
    success = false,
    type = "button",
    valid = false,
    PassiveIcon
}) => {
    const [disabled, setDisabled] = useState(busy);

    useEffect(() => {
        setDisabled(busy || !valid)
    }, [success, busy, valid])

    const style = 'py-2 px-4 flex items-center text-white font-bold rounded';

    const buttonHoverColor = "hover:bg-color-600".replace('color', config.primaryColor)
    const buttonColor = "bg-color-500".replace('color', config.primaryColor)

    return (
        <button
            type={type}
            className={`${style} ${className} ${buttonColor} ${disabled ? 'opacity-75 cursor-not-allowed' : buttonHoverColor}`}
            disabled={disabled}
            onClick={onClick}
        >
            {!busy && !success && (PassiveIcon)}
            {busy && (
                <svg className="animate-spin w-5 h-5" xmlns="http://www.w3.org/2000/svg"
                     fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
            )}
            {success && (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )}
            <span className={(busy || success || PassiveIcon) ? 'ml-2' : ''}>{formatTheButtonToBeGrammaticallyCorrect(buttonText, { busy, valid, success })}</span>
        </button>
    );
};

export default Button;
