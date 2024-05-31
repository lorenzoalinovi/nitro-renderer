import { IUserImagesAPI } from './IUserImagesAPI';

export class UserImagesAPI implements IUserImagesAPI {
    async getUserImages(userId: number): Promise<{ profileImage: string, bannerImage: string }> {
        // Qui dovresti fare la chiamata API al tuo server backend.
        // Questo è solo un esempio e potrebbe non funzionare nel tuo caso specifico.
        const response = await fetch(`/api/users/${userId}/images`);
        const data = await response.json();
        return { profileImage: data.profileImage, bannerImage: data.bannerImage };
    }
}
