import { useSidebarContext } from "./context";
import { StyledBurgerButton } from "./styles";


export const BurguerButton = () => {
    const {collapsed, setCollapsed} = useSidebarContext();
    return (
       <div className={StyledBurgerButton()}  onClick={setCollapsed}>
          <div />
          <div />
       </div>
    );
 };