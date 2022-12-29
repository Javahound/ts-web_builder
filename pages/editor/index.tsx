import Head from "next/head"
import React from "react"
import { useEffect, useState } from "react";
import Image from "next/image";
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DynTreeItem from "../../components/RichObjectTreeView";
import { title } from "process";
import Element from "../../components/Element";

let pageTitle = "New Page"

export default function Editor() {
    
    const [title, setTitle] = useState("New Page");

    useEffect(() => {
        // This will run when the page first loads and whenever the title changes
        document.title = title + " - Editor";
    }, [title]);

    const changeTitle = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setTitle(event.target.value);
        pageTitle = title
    };

    const [fileMenuState, setFileMenuState] = React.useState(false)

    const openFileMenu = () => {
        setFileMenuState(!fileMenuState)
    }
    return (
        <>
            <Head>
                <title>{title} - Editor</title> 
            </Head>
            {/* Top Navigation */}
            <header className="h-[6%] max-h-[40px] w-full fixed bg-[#3e3e3e]">
                <div className="flex h-[100%] px-4">
                    <Image src="/ts_logo.png" alt="/" width='36' height='36' className='rounded-half cursor-pointer' />
                    <h2 className="text-2xl justify-end-baseline px-4 pt-1">TS Web Builder</h2>
                    <MenuItem Action={openFileMenu} state={fileMenuState}>
                        File
                        <MenuListItem Action={(e: any) => {e}} state={fileMenuState} width="w-[140px] mt-2">Save</MenuListItem>
                        <MenuListItem Action={(e: any) => {e}} state={fileMenuState} width="w-[140px]">Open</MenuListItem>
                        <MenuListItem Action={(e: any) => {e}} state={fileMenuState} width="w-[140px]">Open Recent</MenuListItem>
                    </MenuItem>
                    
                    <MenuItem Action={openFileMenu} state={false}>Edit</MenuItem>
                    <MenuItem Action={openFileMenu} state={false}>View</MenuItem>
                    <MenuItem Action={openFileMenu} state={false}>Help</MenuItem>
                    <MenuItem Action={openFileMenu} state={false}>About</MenuItem>
                </div>
            </header>
            {/* Items Panel */}
            <nav className="h-[97%] max-h-[100%-10px] top-[39px] left-0 bg-[#333] min-w-[175px] fixed w-[12.5%] border-r-[1px] border-[#5e5e5e] ">
                <div className="container flex flex-col max-h-[50%] h-[75%]">
                    <p className="border-b-2 border-[#5e5e5e] bg-[#5e5e5e] w-[100%] pl-[.75rem]">Page Elements</p>
                    <TreeView
                    aria-label="icon expansion"
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}
                    sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
                    >
                        <DynTreeItem nodeId="1" label={title}>
                            <DynTreeItem nodeId="2" label="Calendar" />
                            <DynTreeItem nodeId="3" label="Chrome" />
                            <DynTreeItem nodeId="4" label="Webstorm" />
                        </DynTreeItem>
                        <DynTreeItem nodeId="5" label="Documents">
                            <DynTreeItem nodeId="10" label="OSS" />
                            <DynTreeItem nodeId="6" label="MUI">
                            <DynTreeItem nodeId="7" label="src">
                                <DynTreeItem nodeId="8" label="index.js" />
                                <DynTreeItem nodeId="9" label="tree-view.js" />
                            </DynTreeItem>
                            </DynTreeItem>
                        </DynTreeItem>
                    </TreeView>
                </div>
                <div className="container flex flex-col h-[49%]">
                    <p className="border-b-2 border-[#5e5e5e] bg-[#5e5e5e] w-[100%] pl-[.75rem] ">Toolkit</p>
                    <TreeView
                    aria-label="icon expansion"
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}
                    sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
                    style={{paddingBottom: "2rem"}}>
                        <DynTreeItem nodeId="1" label="Text Elements">
                            <div className="grid-cols-2 grid text-center">
                                <Element>
                                    <h2>h1</h2>
                                    <p>Heading 1</p>
                                </Element>
                                <Element>
                                    <h2>h2</h2>
                                    <p>Heading 2</p>
                                </Element>
                                <Element>
                                    <h2>h3</h2>
                                    <p>Heading 3</p>
                                </Element>
                                <Element>
                                    <h2>h4</h2>
                                    <p>Heading 4</p>
                                </Element>
                                <Element>
                                    <h2>h5</h2>
                                    <p>Heading 5</p>
                                </Element>
                                <Element>
                                    <h2>h6</h2>
                                    <p>Heading 6</p>
                                </Element>
                                <Element>
                                    <h2>p</h2>
                                    <p>Paragraph</p>
                                </Element>
                            </div>
                        </DynTreeItem>
                        <DynTreeItem nodeId="5" label="Input Elements">
                            <div className="grid-cols-2 grid text-center">
                                <Element>
                                    <h2>PL</h2>
                                    <p>Text Input</p>
                                </Element>
                                <Element>
                                    <h2>PL</h2>
                                    <p>Textarea</p>
                                </Element>
                                <Element>
                                    <h2>PL</h2>
                                    <p>Checkbox</p>
                                </Element>
                                <Element>
                                    <h2>PL</h2>
                                    <p>Radio Button</p>
                                </Element>
                                <Element>
                                    <h2>PL</h2>
                                    <p>Dropdown</p>
                                </Element>
                                <Element>
                                    <h2>PL</h2>
                                    <p>Button</p>
                                </Element>
                                <Element>
                                    <h2>PL</h2>
                                    <p>Submit Button</p>
                                </Element>
                                <Element>
                                    <h2>PL</h2>
                                    <p>File Upload</p>
                                </Element>
                            </div>
                        </DynTreeItem>
                    </TreeView>
                </div>
            </nav>
            {/* Web View */}
            <main className="overflow-hidden">
                <div className="editor ">

                </div>
            </main>
            {/* Properties / CSS / JS */}
            <div className="h-[97%] max-h-[100%-10px] top-[39px] right-0 bg-[#333] min-w-[200px] fixed w-[15%] border-l-[1px] border-[#5e5e5e] overflow-hidden">
                <div className="container flex flex-col">
                    <p className="border-b-2 border-[#5e5e5e] bg-[#5e5e5e] w-[100%] pl-[.75rem]">Element Properties</p>
                    <div className="flex pl-[.75rem]">
                        <p>Page Title: </p>
                        <input type="text" onChange={changeTitle} value={title} />
                    </div>
                </div>
            </div>
        </>
    )
}
// @ts-expect-error
const MenuItem = ( {children, Action, state} ) => {
    return (
        <div className={state ? "menuItem ml-4 text-center pt-2 bg-[#5e5e5e] w-[72px]" : "menuItem ml-4 px-4 text-center pt-2 hover:bg-[#5e5e5e] w-[72px]"} onClick={Action}>{children}</div>
    )
}
// @ts-expect-error
const MenuListItem = ( {children, Action, state, width} ) => {
    return (
        <div className={state ? `menuItem text-left pt-2 pb-2 px-4 bg-[#3e3e3e] hover:bg-[#5e5e5e] inline-block ${width}` : "menuItem text-center pt-2 px-4 hover:bg-[#5e5e5e] hidden ${width}"} onClick={Action}>{children}</div>
    )
}