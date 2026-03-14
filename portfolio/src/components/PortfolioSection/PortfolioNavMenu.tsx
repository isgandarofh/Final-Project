import { useDispatch, useSelector } from "react-redux";
import { setCurrentCategoryId } from "../../store/slices/portfolioSlice";


export default function PortfolioNavMenu() {
    const dispatch = useDispatch();
    const {categories,  currentCategoryId} = useSelector((state : any)=> state.portfolio);

    const handleClick = (id : number)=>{
        dispatch(setCurrentCategoryId(id));
    }

    return (
        <>

            <div onClick={()=>{handleClick(0)}} className={`portfolio-header-box ${currentCategoryId === 0 ? 'portfolio-header-box-active' : ''} `}>All</div>
            {categories?.map((item: any) => (
                <div
                onClick={()=>{handleClick(item.id)}}
                    key={item.id}
                    className={`portfolio-header-box ${currentCategoryId === item.id ? 'portfolio-header-box-active' : ''} `}
                >
                    {item.title}
                </div>
            ))}
        </>
    )
}
