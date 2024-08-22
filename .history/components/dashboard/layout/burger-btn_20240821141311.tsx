import { useSidebarContext } from "./context";
import { StyledBurgerButton } from "./styles";


export const BurguerButton = () => {
    const {collapsed, setCollapsed} = useSidebarContext();
    return (
       <StyledBurgerButton open={collapsed} onClick={setCollapsed}>
          <div />
          <div />
       </StyledBurgerButton>
    );
 };