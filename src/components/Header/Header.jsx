import profile from "../../assets/images/profile.png";

const Header = () => {
    return (
        <header className="flex justify-between items-center p-4 border-b-2 max-w-[1170px] mx-4 mx-auto">
            <h1 className='text-4xl bg-green-100 font-bold text-center'>Knowledge Cafe (phm-42)</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;