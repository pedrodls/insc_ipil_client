/* eslint-disable jsx-a11y/role-supports-aria-props */

interface userProps {
    username: string,
    ref1: string,
    ref2: string,
    ref3: string,
    Action1: string,
    Action2: string,
    Action3: string,
}

export const Dropdown = ({username, ref1, ref2, ref3, Action1, Action2, Action3}: userProps) => {
    return (
        <div className="dropdown">
            <h4 className="dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                {username}
            </h4>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href={ref1}>{Action1}</a></li>
                <li><a className="dropdown-item" href={ref2}>{Action2}</a></li>
                <li><a className="dropdown-item" href={ref3}>{Action3}</a></li>
            </ul>
        </div>
    )
}