import React, { useState } from "react";
import Text from '../components/Text';
import Line from "../components/Line";
import Button from "../components/Button/Button";
import Table from "../components/Table";
import AppWrapper from "../components/Layout/AppWrapper";
import Box from "../components/Box";
import Switch, { SwitchSize } from "../components/Switch";


const FormCell = ({ children, ...rest }) => {
    return <Box borderColor={"border"} borderWidth={1} p="md" borderRadius="sm" {...rest}>{children}</Box>
}


const Home = () => {

    const [darkMode, setDarkMode] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isActive, setIsActive] = useState(false);

    return (
        <AppWrapper isDarkMode={darkMode}>

            <Text variant={"h3"} mb="lg">Restyle buttons</Text>            

            <FormCell mb="lg">                
                <Box flex={1} flexDirection={"row"} justifyContent='center' mb="sm">
                    <Text variant={"body"}>Switch to {darkMode ? "light" : "dark"} mode</Text>                    
                    <Switch                                      
                        value={darkMode}     
                        marginLeft={"auto"}
                        onValueChange={(value: boolean) => setDarkMode(value)}
                    /> 
                </Box>
                <Box flex={1} flexDirection={"row"} justifyContent='center' mb="sm">
                    <Text variant="body">Set to loading state</Text>
                    <Switch
                        value={isLoading}
                        marginLeft={"auto"}
                        onValueChange={(value: boolean) => setIsLoading(value)}
                    />
                </Box>
                <Box flex={1} flexDirection={"row"} justifyContent='center' mb="sm">
                    <Text variant="body">Set to disabled state</Text>
                    <Switch
                        value={isDisabled}
                        marginLeft={"auto"}
                        onValueChange={(value: boolean) => setIsDisabled(value)}
                    />
                </Box>
                <Box flex={1} flexDirection={"row"} justifyContent='center' mb="sm">
                    <Text variant="body">Set to active state</Text>
                    <Switch
                        value={isActive}
                        marginLeft={"auto"}
                        onValueChange={(value: boolean) => setIsActive(value)}
                    />
                </Box>
            </FormCell>

            <FormCell mb="lg">
                <Text variant="h5" mb="sm">Default buttons</Text>
                <Button variant="primary" mb="sm" loading={isLoading} disabled={isDisabled} active={isActive} iconRight='arrow-up-right'>Primary button</Button>
                <Button variant="secondary" mb="sm" loading={isLoading} disabled={isDisabled} active={isActive}>Secondary button</Button>
                <Button variant="danger" mb="sm" loading={isLoading} disabled={isDisabled} active={isActive}>Danger button</Button>
                <Button variant="success" mb="sm" loading={isLoading} disabled={isDisabled} active={isActive}>Success button</Button>
                <Button variant="warning" mb="sm" loading={isLoading} disabled={isDisabled} active={isActive}>Warning button</Button>
            </FormCell>

            <FormCell mb="lg">
                <Text variant="h5" mb="sm">Size variants</Text>
                <Button variant="primary-small" mb="sm" loading={isLoading} disabled={isDisabled} active={isActive}>Primary button</Button>
                <Button variant="secondary-small" mb="sm" loading={isLoading} disabled={isDisabled} active={isActive}>Secondary button</Button>
                <Button variant="danger-small" mb="sm" loading={isLoading} disabled={isDisabled} active={isActive}>Danger button</Button>
                <Button variant="success-small" mb="sm" loading={isLoading} disabled={isDisabled} active={isActive}>Success button</Button>
                <Button variant="warning-small" mb="sm" loading={isLoading} disabled={isDisabled} active={isActive}>Warning button</Button>
            </FormCell>

            <FormCell mb="lg">
                <Text variant="h5" mb="sm">Shape variants</Text>
                <Button variant="primary-pill" mb="sm" loading={isLoading} disabled={isDisabled} active={isActive}>Primary pill</Button>
                <Button variant="secondary-pill" mb="sm" loading={isLoading} disabled={isDisabled} active={isActive}>Secondary pill</Button>
                <Button variant="danger-pill" mb="sm" loading={isLoading} disabled={isDisabled} active={isActive}>Danger pill</Button>
                <Button variant="warning-pill" mb="sm" loading={isLoading} disabled={isDisabled} active={isActive}>Warning pill</Button>
                <Button variant="success-pill" mb="sm" loading={isLoading} disabled={isDisabled} active={isActive}>Success pill</Button>
            </FormCell>

        </AppWrapper>);
}


export default Home;