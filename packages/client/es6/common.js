var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// prettier-ignore
export const replaceAsync = (_f, effect, capture, filter, final, early) => {
    const f = _f;
    return ((...p) => __awaiter(void 0, void 0, void 0, function* () {
        let res = undefined;
        const params = filter ? filter(...p) : p;
        try {
            if (early) {
                res = yield early(...params);
            }
            if (res === undefined) {
                res = yield f(...params);
            }
            res = yield effect(res);
        }
        catch (error) {
            if (capture)
                capture(error);
            throw error;
        }
        finally {
            if (final)
                final(res);
        }
        return res;
    })).bind(this);
};
export const safeReplaceAsync = (_f, effect, capture, filter, final, early) => {
    const f = _f;
    return ((...p) => __awaiter(void 0, void 0, void 0, function* () {
        let res;
        if (filter)
            filter(...p);
        const params = p;
        try {
            if (early)
                early(...params);
            res = yield f(...params);
            if (effect)
                effect(res);
        }
        catch (error) {
            if (capture)
                capture(error);
            throw error;
        }
        finally {
            if (final)
                final(res);
        }
        return res;
    })).bind(this);
};
export const chunk = (array, size) => Array.from(Array(Math.ceil(array.length / size)).keys()).map(i => array.slice(i * size, i * size + size));
export const maybeArray = (maybe) => {
    return Array.isArray(maybe) ? maybe : [maybe];
};
export const isPaginated = (data) => data.data !== undefined;
export const feathersResultToArray = (data) => {
    return Array.isArray(data) ? data : isPaginated(data) ? data.data : [data];
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbW1vbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFJQSxrQkFBa0I7QUFDbEIsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUFHLENBQzNCLEVBQUssRUFDTCxNQUF3QyxFQUN4QyxPQUE4QixFQUM5QixNQUErQyxFQUMvQyxLQUE0QixFQUM1QixLQUE0QixFQUMzQixFQUFFO0lBQ0gsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFBO0lBQ1osT0FBTyxDQUFDLENBQU8sR0FBRyxDQUFRLEVBQUUsRUFBRTtRQUM3QixJQUFJLEdBQUcsR0FBRyxTQUFTLENBQUE7UUFDbkIsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBSSxDQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUMzRCxJQUFJO1lBQ0gsSUFBSSxLQUFLLEVBQUU7Z0JBQ1YsR0FBRyxHQUFHLE1BQU0sS0FBSyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUE7YUFDNUI7WUFDRCxJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7Z0JBQ3RCLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFBO2FBQ3hCO1lBQ0QsR0FBRyxHQUFHLE1BQU0sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1NBQ3ZCO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZixJQUFJLE9BQU87Z0JBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQzNCLE1BQU0sS0FBSyxDQUFBO1NBQ1g7Z0JBQVM7WUFDVCxJQUFJLEtBQUs7Z0JBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1NBQ3JCO1FBQ0QsT0FBTyxHQUFHLENBQUE7SUFDWCxDQUFDLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQU0sQ0FBQTtBQUNuQixDQUFDLENBQUE7QUFFRCxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRyxDQUMvQixFQUFLLEVBQ0wsTUFBd0MsRUFDeEMsT0FBOEIsRUFDOUIsTUFBcUMsRUFDckMsS0FBNEIsRUFDNUIsS0FBNEIsRUFDM0IsRUFBRTtJQUNILE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQTtJQUNaLE9BQU8sQ0FBQyxDQUFPLEdBQUcsQ0FBUSxFQUFFLEVBQUU7UUFDN0IsSUFBSSxHQUFHLENBQUE7UUFDUCxJQUFJLE1BQU07WUFBRSxNQUFNLENBQUMsR0FBSSxDQUFtQixDQUFDLENBQUE7UUFDM0MsTUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFBO1FBQ2hCLElBQUk7WUFDSCxJQUFJLEtBQUs7Z0JBQUUsS0FBSyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUE7WUFDM0IsR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUE7WUFDeEIsSUFBSSxNQUFNO2dCQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtTQUN2QjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2YsSUFBSSxPQUFPO2dCQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUMzQixNQUFNLEtBQUssQ0FBQTtTQUNYO2dCQUFTO1lBQ1QsSUFBSSxLQUFLO2dCQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtTQUNyQjtRQUNELE9BQU8sR0FBRyxDQUFBO0lBQ1gsQ0FBQyxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFNLENBQUE7QUFDbkIsQ0FBQyxDQUFBO0FBRUQsTUFBTSxDQUFDLE1BQU0sS0FBSyxHQUFHLENBQUksS0FBVSxFQUFFLElBQVksRUFBRSxFQUFFLENBQ3BELEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQ2hFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUN0QyxDQUFBO0FBRUYsTUFBTSxDQUFDLE1BQU0sVUFBVSxHQUFHLENBQUksS0FBYyxFQUFFLEVBQUU7SUFDL0MsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUE7QUFDOUMsQ0FBQyxDQUFBO0FBQ0QsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFHLENBQzFCLElBQTRCLEVBQ0wsRUFBRSxDQUFFLElBQXFCLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQTtBQUVwRSxNQUFNLENBQUMsTUFBTSxxQkFBcUIsR0FBRyxDQUFJLElBQTRCLEVBQU8sRUFBRTtJQUM3RSxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQzNFLENBQUMsQ0FBQSJ9