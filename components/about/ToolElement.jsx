export const ToolElement = ({ tool }) => {
    return (
        <div className="flex justify-center items-center px-4 py-2 bg-primary-dark dark:bg-primary-light text-primary-light dark:text-primary-dark mr-3 mt-3 rounded-lg square">
            {tool}
        </div>
    )
};