import S from '@sanity/desk-tool/structure-builder';
import {
    // VscAccount,
    VscFile,
    // VscFolder,
} from 'react-icons/vsc';

export default () => {
    return S.list()
        .title('Content')
        .items([
            S.listItem()
                .title('Index')
                .icon(VscFile)
                .child(
                    S.document()
                        .schemaType('indexPage')
                        .documentId('indexPage'),
                ),
            S.listItem()
                .title('Coaching')
                .icon(VscFile)
                .child(
                    S.document()
                        .schemaType('coachingPage')
                        .documentId('coachingPage'),
                ),
            S.listItem()
                .title('Speaking')
                .icon(VscFile)
                .child(
                    S.document()
                        .schemaType('speakingPage')
                        .documentId('speakingPage'),
                ),
            S.listItem()
                .title('Writing')
                .icon(VscFile)
                .child(
                    S.document()
                        .schemaType('writingPage')
                        .documentId('writingPage'),
                ),
            S.listItem()
                .title('About')
                .icon(VscFile)
                .child(
                    S.document()
                        .schemaType('aboutPage')
                        .documentId('aboutPage'),
                ),
            S.listItem()
                .title('Contact')
                .icon(VscFile)
                .child(
                    S.document()
                        .schemaType('contactPage')
                        .documentId('contactPage'),
                ),
            S.listItem()
                .title('Settings')
                .icon(VscFile)
                .child(
                    S.document().schemaType('settings').documentId('settings'),
                ),
            ...S.documentTypeListItems().filter(
                (listItem) =>
                    ![
                        'aboutPage',
                        'coachingPage',
                        'contactPage',
                        'indexPage',
                        'settings',
                        'speakingPage',
                        'writingPage',
                    ].includes(listItem.getId()),
            ),
        ]);
};
