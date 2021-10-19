import { Disclosure } from '@headlessui/react'
import { BiChevronUp, BiChevronDown } from "react-icons/bi";

const PlaysFilter = (props) => {
    return (
        <div className=" flex flex-col bg-gray-100 mb-4 px-3 py-2 mr-10 rounded-md gap-3">
            <Disclosure>
                {({ open }) => (
                    <>
                        <Disclosure.Button className="py-2 flex items-center gap-3">
                            {open ? <BiChevronUp /> : <BiChevronDown />}

                            <span className={open ? "text-red-600" : "text-gray-700"}>
                                {props.title}
                            </span>

                        </Disclosure.Button>
                        <Disclosure.Panel className="text-gray-500">
                            <div className="flex items-center gap-3 flex-wrap">
                                {props.tags.map((tag) => (
                                    <>
                                        <div className="border border-gray-400 p-1">
                                            <span className="text-red-600 text-sm">{tag}</span>
                                        </div>
                                    </>
                                ))

                                }
                            </div>
                        </Disclosure.Panel>
                    </>
                )}

            </Disclosure>
        </div>
    );
};

export default PlaysFilter;