import { handleGenerateMetadata } from 'shared/utils/handleGenerateMetadata'

export async function generateMetadata({ params: { locale } }: LocalePageProps) {
    return await handleGenerateMetadata({
        route: `/[_FTName%paramcase_]`,
        namespace: 'metadata.[_FTName%camelcase_]',
        locale,
    })
}

export default async function [_FTName%pascalcase_]Page() {
    return <></>
}