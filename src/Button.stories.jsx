import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./AtomButton";

storiesOf("Shared|Buttons", module)
    .add("buttons", () => {
        return (
            <div className={"flex flex-wrap m-4"}>
                <div className="text-lx font-bold text-gray-600 mb-2">
                    Upload
                </div>
                <div className="w-full flex flex-wrap">
                    <Button
                        onClick={() => {}}
                        buttonText={"Upload"}
                        busy={true}
                        success={false}
                        valid={true}
                    />
                    <Button
                        className="ml-4"
                        onClick={() => {}}
                        buttonText={"Upload"}
                        busy={false}
                        success={true}
                        valid={true}
                    />
                    <Button
                        className="ml-4"
                        onClick={() => {}}
                        buttonText={"upload"}
                        busy={false}
                        success={false}
                        valid={true}
                        PassiveIcon={(
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                            </svg>
                        )}
                    />
                </div>

                <div className="text-lx font-bold mt-4 text-gray-600 mb-2">
                    Save
                </div>
                <div className="w-full flex flex-wrap">
                    <Button
                        onClick={() => {}}
                        buttonText={"save"}
                        busy={true}
                        success={false}
                        valid={true}
                    />
                    <Button
                        className="ml-4"
                        onClick={() => {}}
                        buttonText={"save"}
                        busy={false}
                        success={true}
                        valid={true}
                    />
                    <Button
                        className="ml-4"
                        onClick={() => {}}
                        buttonText={"save"}
                        busy={false}
                        success={false}
                        valid={true}
                    />
                </div>

                <div className="text-lx font-bold mt-4 text-gray-600 mb-2">
                    save dynamic campaign
                </div>
                <div className="w-full flex flex-wrap">
                    <Button
                        onClick={() => {}}
                        buttonText={"save dynamic campaign"}
                        busy={true}
                        success={false}
                        valid={true}
                    />
                    <Button
                        className="ml-4"
                        onClick={() => {}}
                        buttonText={"save dynamic campaign"}
                        busy={false}
                        success={true}
                        valid={true}
                    />
                    <Button
                        className="ml-4"
                        onClick={() => {}}
                        buttonText={"save dynamic campaign"}
                        busy={false}
                        success={false}
                        valid={true}
                    />
                </div>


                <div className="text-lx font-bold mt-4 text-gray-600 mb-2">
                    Log in
                </div>
                <div className="w-full flex flex-wrap">

                    <Button
                        onClick={() => {}}
                        buttonText={"log in"}
                        busy={true}
                        success={false}
                        valid={true}
                    />

                    <Button
                        className="ml-4"
                        onClick={() => {}}
                        buttonText={"log in"}
                        busy={false}
                        success={true}
                        valid={true}
                    />

                    <Button
                        className="ml-4"
                        onClick={() => {}}
                        buttonText={"log in"}
                        busy={false}
                        success={false}
                        valid={true}
                    />
                </div>
            </div>
        );
    })
    .add("default", () => {
        return (
            <Button
                onClick={() => {}}
                buttonText={"Load"}
                busy={true}
                disabled={true}
                valid={true}
            />
        );
    })
    .add("secondary", () => {
        return (
            <Button
                onClick={() => {}}
                buttonText={"Load"}
                busy={true}
                disabled={true}
                valid={true}
            />
        );
    })
    .add("disabled", () => {
        return (
            <Button
                onClick={() => {}}
                buttonText={"Load"}
                busy={true}
                disabled={true}
                valid={true}
            />
        );
    });
