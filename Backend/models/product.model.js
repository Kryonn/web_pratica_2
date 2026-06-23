import db from "../database/database.js"

export const ProductModel = {
    async selectProductAll() {
        try {
            const res = db
                .prepare("SELECT * FROM PRODUCT")
                .all();

            return res;
        } catch(err) {
            throw err;
        }
    },

    async insertProduct(name, value, img, description) {
        try {
            const res = db
                .prepare(`
                    INSERT INTO PRODUCT (name, value, img, description)
                        VALUES (?, ?, ?, ?)
                `)
                .run(name, value, img, description);

            return res;
        } catch(err) {
            throw err;
        }
    },

    async deleteProduct(name) {
        try {
            const res = db
                .prepare(`
                    DELETE FROM PRODUCT
                    WHERE name = ?
                `)
                .run(name);
            
            return res;
        } catch(err) {
            throw err;
        }
    },

    async updateProduct(oldName, newName, newImg, newValue, newDescription) {
        try {
            const res = db
                .prepare(`
                    UPDATE PRODUCT
                    SET name=?, img=?, value=?, description=?
                    WHERE name=? 
                `)
                .run(newName, newImg, newValue, newDescription, oldName);
            
            return res;
        } catch(err) {
            throw err;
        }
    }
}