// @ts-expect-error
const Element = ({ children }) => {
    return (
        <>
            <div className="hover:bg-[#555] rounded-xl my-2">
                {children}
            </div>
        </>
    )
}

export default Element