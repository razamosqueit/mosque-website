import React from 'react';
import { Welcome } from '@/components/Welcome/Welcome';
import { BaseLayout } from '@/components/BaseLayout/BaseLayout';

export default function page() {
    return (
        <>
            <BaseLayout>
            <Welcome />
            </BaseLayout>
        </>
    );
}
