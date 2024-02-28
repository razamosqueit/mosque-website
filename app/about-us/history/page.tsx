import { Text } from '@mantine/core';
import { BaseLayout } from '@/components/BaseLayout/BaseLayout';
import { readFile } from '@/lib/read-file';

export default function page() {
    const content = readFile(`${process.cwd()}/public/test.txt`);
    return (
        <>
            <BaseLayout>
            <Text>{content}</Text>
            <Text>Historyyyyyy</Text>
            </BaseLayout>
        </>
    );
}
