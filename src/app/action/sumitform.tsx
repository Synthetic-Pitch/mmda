'use server';
import crypto from 'crypto';
import MongoDbConnect from '../../../lib/mongoDbConnection';
import Transaction from '../../model/transaction';

export async function submitForm(formData: unknown) {
    if (!(formData instanceof FormData)) {
        throw new Error('Invalid form data');
    }

    const requiredFields = [
        'Gov_ID_image1',
        'Gov_ID_image2',
        'OR_CR_image1',
        'OR_CR_image2',
        'Ticket_image1',
        'License_image1',
        'License_image2',
    ];
    
    // Check for missing or empty fields
    for (const field of requiredFields) {
        const file = formData.get(field);
        if (!file || (typeof file === 'string' && file.trim() === '')) {
            console.log('Empty field:', field);
            return { success: false, error: `Empty field: ${field}` };
        }

        // Additional security checks for files
        if (file instanceof File) {
            // Check for file type
            const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];
            if (!allowedTypes.includes(file.type)) {
                return { success: false, error: `Invalid file type for ${field}` };
            }

            // Check for file size (e.g., max 5MB)
            const maxSize = 5 * 1024 * 1024; // 5MB
            if (file.size > maxSize) {
                return { success: false, error: `File too large for ${field}` };
            }
        }
    }

    let transactionHash = "";
    try{
        await MongoDbConnect();
        // generate a random tranbsaction hash ID
        const randomBytes = crypto.randomBytes(32); // 32 bytes = 256 bits
        transactionHash = crypto.createHash("sha256").update(randomBytes).digest("hex");

        // Create the transaction document
        const imgURLs = [
            { img: formData.get('Gov_ID_image1') },
            { img: formData.get('Gov_ID_image2') },
            { img: formData.get('OR_CR_image1') },
            { img: formData.get('OR_CR_image2') },
            { img: formData.get('Ticket_image1') },
            { img: formData.get('License_image1') },
            { img: formData.get('License_image2') }
        ].filter(item => item.img); // Remove empty or undefined values
        await Transaction.create({
        transactionID: transactionHash,
        imgURL: imgURLs
    });
    }
    catch(err){
        return { success: false, error: "Failed to generate transaction hash" };
    }
   

    // If all checks pass
    return { success: true, transactionHash };
}
