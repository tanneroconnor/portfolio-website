import { IconArrowUp } from '@tabler/icons-react';
import {useViewportSize, useWindowScroll} from '@mantine/hooks';
import {Affix, Button, Transition, rem, ActionIcon} from '@mantine/core';

export default function ScrollBackToTop() {
    const [scroll, scrollTo] = useWindowScroll();
    const { width } = useViewportSize();

    const scrollToTopCenter = width < 1300 ? "20" : 20;

    return (
        <>
            <Affix position={{ bottom: rem(20), right: rem(scrollToTopCenter)}}>
                <Transition transition="slide-up" mounted={scroll.y > 0}>
                    {(transitionStyles) => (
                        <ActionIcon
                            radius="xl"
                            variant="filled"
                            color="blue"
                            size="md"
                            style={transitionStyles}
                            onClick={() => scrollTo({ y: 0 })}
                        >
                            <IconArrowUp size="1rem" />
                        </ActionIcon>

                    )}
                </Transition>
            </Affix>
        </>
    );
}